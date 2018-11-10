using System;
using System.Collections.Generic;
using System.Text;

namespace Common.Domain.Models
{
    public class Product : BaseEntity
    {
        public User Owner { get; set; }
        public long Identifier { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double BorrowingPrice { get; set; }
        public bool IsBorrowed { get; set; }
        public bool IsActive { get; set; }
        // This denotes if the product can be borrowed or is disabled
    }
}
