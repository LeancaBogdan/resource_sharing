namespace WebApplication2.Domain.Models
{
    public class ProductModel : ModelBase
    {   
        public UserModel Owner { get; set; }   
        public string Name { get; set; }
        public string Description { get; set; }
        public double BorrowingPrice { get; set; }
        public bool IsActive { get; set; }
        // This denotes if the product can be borrowed or is disabled
    }
}