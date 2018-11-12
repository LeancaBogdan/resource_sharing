using Common.Domain.Models;
using Microsoft.EntityFrameworkCore;

namespace Common.Domain.Contexts
{
    public class ResourcesContext : BaseContext
    {
        public ResourcesContext() : base()
        { }
        
        public DbSet<User> Users { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<Transaction> Transactions { get; set; }
    }
}