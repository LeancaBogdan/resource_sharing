using Common.Domain.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Domain.Contexts
{
    class ProductContext : BaseContext
    {
        public ProductContext() : base()
        {
        }
        public DbSet<Product> Products { get; set; }
    }
}
