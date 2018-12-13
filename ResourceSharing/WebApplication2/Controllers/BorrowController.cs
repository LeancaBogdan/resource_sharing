using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication2.Domain.Models;

namespace WebApplication2.Controllers
{
    public class BorrowModel
    {
        public Guid fromUser;
        public Guid toUser;
        public DateTime borrowDate;
        public DateTime returnDate;
        public Guid productId;
    }

    [Route("api/[controller]")]
    [ApiController]
    public class BorrowController
    {
        private readonly ResourcesContext _context = new ResourcesContext();


        [HttpGet("{id}/{type}")]
        public ActionResult<IEnumerable<TransactionModel>> Get(string id, string type)
        {
            List<TransactionModel> transactions;
            if (type.Equals("borrower"))
            {
                transactions = _context.Transactions.Include(t => t.Borrower).Include(t => t.Owner).Include(t => t.BorrowedProduct).Where(t => t.Borrower.Id.ToString().Equals(id)).ToList();
            }
            else
            {
                transactions = _context.Transactions.Include(t => t.Borrower).Include(t => t.Owner).Include(t => t.BorrowedProduct).Where(t => t.Owner.Id.ToString().Equals(id)).ToList();
            }
            
            transactions.ForEach(t => t.Borrower.Password = t.Owner.Password = string.Empty);
            return transactions;
        }

        // Create a transaction
        [HttpPost]
        public ActionResult<TransactionModel> Post([FromBody] BorrowModel borrowing)
        {
            var product = _context.Products.FirstOrDefault(s => s.Id == borrowing.productId);
            var toUser = _context.Users.FirstOrDefault(s => s.Id == borrowing.toUser);
            var fromUser = _context.Users.FirstOrDefault(s => s.Id == borrowing.fromUser);

            if (product == null || toUser == null || fromUser == null || product.IsActive == false
                || product.Owner.Id != fromUser.Id)
            {
                return new BadRequestResult();
            }

            var transaction = new TransactionModel
            {
                BorrowedProduct = product,
                Borrower = toUser,
                DatePicked = borrowing.borrowDate,
                DateToReturn = borrowing.returnDate,
                Owner = fromUser
            };
            
            product.IsActive = true;
            _context.Transactions.Add(transaction);
            _context.SaveChanges();
            transaction.Borrower.Password = transaction.Owner.Password = String.Empty;
            return transaction;
        }
    }
}