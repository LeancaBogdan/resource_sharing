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