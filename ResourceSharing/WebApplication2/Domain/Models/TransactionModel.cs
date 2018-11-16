using System;

namespace WebApplication2.Domain.Models
{
    public class TransactionModel : ModelBase
    {
        public UserModel Owner { get; set; }
        public UserModel Borrower { get; set; }
        public ProductModel BorrowedProduct { get; set; }
        public DateTime DatePicked { get; set; }
        public DateTime DateToReturn { get; set; }
    }
}