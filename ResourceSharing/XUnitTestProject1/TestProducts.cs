using System;
using System.Collections.Generic;
using System.Text;

using System;
using System.Linq;
using WebApplication2.Controllers;
using WebApplication2.Domain.Models;
using WebApplication2.Migrations;
using Xunit;

namespace XUnitTestProject1
{
    public class TestProducts
    {
        Guid GetUserGuid()
        {
            MockResources mockresources = new MockResources();

            UsersController userController = new UsersController();
            userController.SetMockResources(mockresources);

            UserModel model = new UserModel();

            model.Email = Guid.NewGuid().ToString();
            model.FirstName = "admin";
            model.LastName = "admin";
            model.Password = "12345";
            model.Role = Role.user;

            userController.Post(model);

            var users = userController.Get();
            foreach (var user in users.Value)
                if (user.Email == model.Email)
                    return user.Id;

            Assert.True(false);//should have found the user
            return Guid.NewGuid();
        }

        [Fact]
        public void Test_AddProductAndCheckIncrement()
        {
            var userGuid = GetUserGuid();

            MockResources mockresources = new MockResources();

            ProductsController productController = new ProductsController();
            productController.SetMockResources(mockresources);

            ProductRequestModel model = new ProductRequestModel();

            model.Id = userGuid;
            model.IsActive = true;
            model.Description = "test description";
            model.Name = "test name";
            model.BorrowingPrice = 100;

            var before = productController.Get().Value.Count();
            productController.Post(model);
            var after = productController.Get().Value.Count();

            Assert.Equal(before + 1, after);
        }

        [Fact]
        public void Test_AddProductMultipleTimes()
        {
            var userGuid = GetUserGuid();

            MockResources mockresources = new MockResources();

            ProductsController productController = new ProductsController();
            productController.SetMockResources(mockresources);

            // clean the db
            ProductRequestModel model = new ProductRequestModel();

            model.Id = userGuid;
            model.IsActive = true;
            model.Description = "test description";
            model.Name = "test name";
            model.BorrowingPrice = 100;

            var before = productController.Get().Value.Count();
            productController.Post(model);
            var after = productController.Get().Value.Count();
            Assert.Equal(before + 1, after);

            before = after;
            productController.Post(model);
            after = productController.Get().Value.Count();

            Assert.Equal(before + 1, after);
        }

        [Fact]
        public void Test_DeleteProductsById()
        {
            var userGuid = GetUserGuid();

            MockResources mockresources = new MockResources();

            ProductsController productController = new ProductsController();
            productController.SetMockResources(mockresources);

            // clean the db
            ProductRequestModel model = new ProductRequestModel();

            model.Id = userGuid;
            model.IsActive = true;
            model.Description = "test description";
            model.Name = "test name";
            model.BorrowingPrice = 100;

            productController.Post(model);
            productController.Post(model);

            var products = productController.Get().Value;
            foreach (var product in products)
                productController.Delete(product.Id.ToString());

            Assert.True(productController.Get().Value.Count() == 0);
            // the product list must be empty
        }

        [Fact]
        public void Test_GetProductsById()
        {
            var userGuid = GetUserGuid();

            MockResources mockresources = new MockResources();

            ProductsController productController = new ProductsController();
            productController.SetMockResources(mockresources);

            // clean the db
            var products = productController.Get().Value;
            foreach (var product in products)
                productController.Delete(product.Id.ToString());

            ProductRequestModel model = new ProductRequestModel();

            model.Id = userGuid;
            model.IsActive = true;
            model.Description = "test description";
            model.Name = "test name";
            model.BorrowingPrice = 100;

            productController.Post(model);

            // there will be in id generated in the DB
            // we should be able to retreive by it now
            products = productController.Get().Value;
            foreach (var product in products) // just one product
                Assert.Equal(product.Id, productController.Get(product.Id.ToString()).Value.Id);
        }

        public void EditProduct()
        {
            var userGuid = GetUserGuid();

            MockResources mockresources = new MockResources();

            ProductsController productController = new ProductsController();
            productController.SetMockResources(mockresources);

            // clean the db
            var products = productController.Get().Value;
            foreach (var product in products)
                productController.Delete(product.Id.ToString());

            ProductRequestModel model = new ProductRequestModel();

            model.Id = userGuid;
            model.IsActive = true;
            model.Description = "test description";
            model.Name = "test name";
            model.BorrowingPrice = 100;

            productController.Post(model);

            products = productController.Get().Value;
            foreach (var product in products) // just one product
            {
                Assert.True(product.IsActive == true);
                model.IsActive = false;
                productController.Put(product.Id.ToString(),model);
            }

            products = productController.Get().Value;
            foreach (var product in products) // just one product
            {
                Assert.True(product.IsActive == false);
            }
        }
    }
}
