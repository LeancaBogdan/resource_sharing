using System.Collections.Generic;

namespace Common.Domain.Models
{
    public class User : BaseEntity
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public bool IsAdmin { get; set; }
        public ICollection<Product> ProductsOwned { get; set; }
        public ICollection<Product> ProductsHasBorrowed { get; set; }
    }
}