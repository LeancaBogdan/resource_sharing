using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Common.Domain.Models
{
    public class Product : BaseEntity
    {
        [NotMapped]
        public User Owner { get; set; }
        [NotMapped]
        public User Borrower { get; set; }
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public double BorrowingPrice { get; set; }
        public bool IsActive { get; set; }
        // This denotes if the product can be borrowed or is disabled
    }
}
