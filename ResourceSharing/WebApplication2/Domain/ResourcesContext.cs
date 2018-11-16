using Microsoft.EntityFrameworkCore;
using WebApplication2.Domain.Models;

namespace WebApplication2.Domain
{
    public class ResourcesContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql("Server=stampy.db.elephantsql.com;Database=lciqecxv;User Id=lciqecxv;Password=4wfQPkttZ_1uiXBlDgFr490LyYqWOWiP;Port=5432");
        }

        public DbSet<UserModel> Users { get; set; }
    }
}