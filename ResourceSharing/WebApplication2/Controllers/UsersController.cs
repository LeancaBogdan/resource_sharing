using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Domain.Models;

namespace WebApplication2.Controllers
{
    
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController
    {
        private readonly ResourcesContext _context = new ResourcesContext();
        
        [HttpGet]
        public ActionResult<IEnumerable<UserModel>> Get() => _context.Users;

        [HttpPost]
        public ActionResult Post([FromBody] UserModel user)
        {
            if (_context.Users.Any(u => string.Equals(u.Email, user.Email)))
            {
                return new ConflictResult();
            }

            user.Role = Role.user;
            user.Id = Guid.NewGuid();
            _context.Users.Add(user);
            _context.SaveChanges();

            return new AcceptedResult();
        }
        
    }
}