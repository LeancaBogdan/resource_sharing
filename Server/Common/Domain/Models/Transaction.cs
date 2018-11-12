
using System;

namespace Common.Domain.Models
{
    public class Transaction
    {
        public long Id { get; set; }
        public User Owner { get; set; }
        public User Borrower { get; set; }
        public Product BorrowedProduct { get; set; }
        public DateTime DatePicked { get; set; }
        public DateTime DateToReturn { get; set; }
    }
}