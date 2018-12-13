using System;
using System.Linq;
using WebApplication2.Controllers;
using WebApplication2.Domain.Models;
using WebApplication2.Migrations;
using Xunit;

namespace XUnitTestProject1
{
    public class TestLogin
    {
        bool UsersEqual(UserModel a, UserModel b)
        {
            if (a.Email != b.Email) return false;
            if (a.FirstName != b.FirstName) return false;
            if (a.LastName != b.LastName) return false;
            if (a.Password != b.Password) return false;
            if (a.Role != b.Role) return false;

            return true;
        }

        [Fact]
        public void Test_AddUserAndLogin()
        {
            MockResources mockresources = new MockResources();

            UsersController userController = new UsersController();
            userController.SetMockResources(mockresources);

            LoginController loginController = new LoginController();
            loginController.SetMockResources(mockresources);

            UserModel model = new UserModel();

            model.Email = Guid.NewGuid().ToString();
            model.FirstName = "haha";
            model.LastName = "haha";
            model.Password = "12345";
            model.Role = Role.user;

            userController.Post(model);

            LoginModel credentials = new LoginModel();
            credentials.Email = model.Email;
            credentials.Password = "12345";

            Assert.True(UsersEqual(model, loginController.Post(credentials).Value));
        }
    }
}
