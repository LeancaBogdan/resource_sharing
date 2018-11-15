using System;
using System.Collections.Generic;
using System.Linq;
using Common.Domain.Contexts;
using Common.Domain.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly ResourcesContext _context = new ResourcesContext();
        
        [HttpGet]
        public ActionResult<IEnumerable<User>> Get()
        {

            User user = new User()
            {
                Name = "Zeul",
                Username = "Miron",
                Email = "patronu@sefie.zeu",
                Password = "paroladezei",
                Role = Role.admin
            };
            
            Console.WriteLine("\n{0}\n", user.Name);

            //_context.Users.Add(user);
            var user2 =  _context.Users.First();
            Console.WriteLine(("\n and now we got " + user2.Name));
            
            return _context.Users;
        }

        [HttpPost]
        public ActionResult Post([FromBody] User user)
        {
            
            _context.Users.Add(user);

            return new AcceptedResult();
        }
    }
}