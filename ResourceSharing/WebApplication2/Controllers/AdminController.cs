using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2;
using WebApplication2.Domain.Models;

namespace WebApplication2.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly ResourcesContext _context = new ResourcesContext();

        // GET: api/Admin
        [HttpGet]
        public IEnumerable<UserModel> GetUsers()
        {
            return _context.Users;
        }

        // Return all users
        [HttpGet("users")]
        public ActionResult<IEnumerable<UserModel>> Get()
        {
            List<UserModel> users =_context.Users.Where(s => s.Role == Role.user).ToList();
            users.ForEach(s => s.Password = string.Empty);
            return users;
        }

        // Return all products owned by user
        // GET: api/{admin id}/products/{user id}
        [HttpGet("{admin_id}/products/{user_id}")]
        public ActionResult<IEnumerable<ProductModel>> GetProductsOwnedByUser(string owner_id)
        {
            List<ProductModel> products = _context.Products.Include(s => string.Equals(s.Owner.Id, owner_id)).ToList();
            return products;
        }

        // PUT: api/Admin/5
        // Edit an user and make it an admin.
        [HttpPut("{id}")]
        public ActionResult PutUserModel([FromBody] UserModel userModel)
        {
            
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _context.Entry(userModel).State = EntityState.Modified;


            userModel.Role = Role.admin;
            _context.SaveChanges();

            return new AcceptedResult();

        }

        
        private bool UserModelExists(Guid id)
        {
            return _context.Users.Any(e => e.Id == id);
        }
    }
}