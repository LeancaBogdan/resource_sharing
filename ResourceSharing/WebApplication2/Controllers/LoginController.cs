using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using WebApplication2.Domain.Models;

namespace WebApplication2.Controllers
{
    public class LoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
    
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController
    {
        private ResourcesContext _context = new ResourcesContext();

        public void SetMockResources(ResourcesContext ctx)
        {
            _context = ctx;
        }

        [HttpPost]
        public ActionResult<UserModel> Post([FromBody] LoginModel credentials)
        {
            var user = _context.Users.FirstOrDefault(u => string.Equals(u.Email, credentials.Email));

            if (user != null && string.Equals(user.Password, credentials.Password))
            {
                user.Password = "";
                return user;
            }

            return new NotFoundResult();
        }
    }
}