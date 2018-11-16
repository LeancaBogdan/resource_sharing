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
        private readonly ResourcesContext _context = new ResourcesContext();

        [HttpGet]
        public ActionResult<UserModel> Get([FromBody] LoginModel credentials)
        {
            var user = _context.Users.FirstOrDefault(u => string.Equals(u.Email, credentials.Email));
            Console.WriteLine("\n\n{0}{1}\n\n", user.FirstName, credentials.Email);
            if (user != null && string.Equals(user.Password, credentials.Password))
            {
                return user;
            }

            return null;
        }
    }
}