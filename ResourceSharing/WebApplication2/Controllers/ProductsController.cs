using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Internal;
using WebApplication2.Domain.Models;

namespace WebApplication2.Controllers
{
    public class ProductRequestModel
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public double BorrowingPrice { get; set; }
        public bool IsActive { get; set; }
        public Guid Id { get; set; }
    }
    
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController
    {
        private readonly ResourcesContext _context = new ResourcesContext();

        [HttpGet]
        public ActionResult<IEnumerable<ProductModel>> Get() => _context.Products;

        [HttpPost]
        public ActionResult Post([FromBody] ProductRequestModel product)
        {
            var user = _context.Users.FirstOrDefault((u) => product.Id == u.Id);
            Console.WriteLine("\n" + product.Name + " " + product.Id + " " + user.FirstName);

            var productModel = new ProductModel()
            {
                Name = product.Name,
                Description = product.Description,
                BorrowingPrice = product.BorrowingPrice,
                Id = Guid.NewGuid(),
                IsActive = (product.IsActive != null ? product.IsActive : true),
                Owner = user
            };
            
            _context.Products.Add(productModel);
            _context.SaveChanges();

            return new AcceptedResult();
        }
    }
}