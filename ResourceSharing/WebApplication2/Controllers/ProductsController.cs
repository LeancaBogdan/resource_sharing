using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        private ResourcesContext _context = new ResourcesContext();

        public void SetMockResources(ResourcesContext ctx)
        {
            _context = ctx;
        }

        // Return all products
        [HttpGet]
        public ActionResult<IEnumerable<ProductModel>> Get()
        {
            List<ProductModel> products = _context.Products.Include(s => s.Owner).ToList();
            products.ForEach(s => s.Owner.Password = string.Empty);
            return products;
        } 

        // Return a product by id
        [HttpGet("{productId}")]
        public ActionResult<ProductModel> Get(string productId)
        {
            var product = _context.Products.Include(s => s.Owner).FirstOrDefault(p => p.Id.ToString().Equals(productId));
            if (product == null)
            {
                return new NotFoundResult();
            }
            
            product.Owner.Password = string.Empty;
            return product;
        } 
            
        // Delete a product by id
        [HttpDelete("{productId}")]
        public ActionResult Delete(string productId)
        {
            var product = _context.Products.Include(s => s.Owner).FirstOrDefault(p => p.Id.ToString().Equals(productId));
            if (product == null)
            {
                return new NotFoundResult();
            }

            _context.Products.Remove(product);
            _context.SaveChanges();
            return new AcceptedResult();
        } 
        
        // Edit a product 
        [HttpPut("{productId}")]
        public ActionResult Put(string productId, [FromBody] ProductRequestModel product)
        {
            var dbProduct = _context.Products.FirstOrDefault((u) => u.Id.ToString().Equals(productId));

            if (dbProduct == null)
            {
                return new NotFoundResult();
            }

            dbProduct.Description = product.Description;
            dbProduct.Name = product.Name;
            dbProduct.IsActive = product.IsActive;
            dbProduct.BorrowingPrice = product.BorrowingPrice;
            _context.SaveChanges();

            return new AcceptedResult();
        }
        
        // Add a product 
        [HttpPost]
        public ActionResult Post([FromBody] ProductRequestModel product)
        {
            var user = _context.Users.FirstOrDefault((u) => product.Id == u.Id);

            if (user == null)
            {
                return new BadRequestResult();
            }
            
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