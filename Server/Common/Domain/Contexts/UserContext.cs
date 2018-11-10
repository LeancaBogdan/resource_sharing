using Common.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Common.Domain.Contexts
{
    public class UserContext : BaseContext
    {
        public UserContext() : base()
        { }
        
        public DbSet<User> Users { get; set; }
    }
}