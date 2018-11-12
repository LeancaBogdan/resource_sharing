using Microsoft.EntityFrameworkCore;

namespace Common.Domain.Contexts
{
    public abstract class BaseContext : DbContext
    {
        private readonly string _connectionString;
        protected BaseContext()
        {
            _connectionString = GetConnectionString();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_connectionString);
        }

        private static string GetConnectionString()
        {
            return DatabaseDetails.ConnectionString;
        }
    }
}