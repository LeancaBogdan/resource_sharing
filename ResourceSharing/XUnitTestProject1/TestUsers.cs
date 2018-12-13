using System;
using System.Linq;
using WebApplication2.Controllers;
using WebApplication2.Domain.Models;
using WebApplication2.Migrations;
using Xunit;

namespace XUnitTestProject1
{
    public class TestUsers
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
        public void Test_AddUserCheckCountIncremented()
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

            var before = userController.Get().Value.Count();

            userController.Post(model);

            var after = userController.Get().Value.Count();

            Assert.True(before < after);
        }

        [Fact]
        public void Test_AddUserAndFindIt()
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

            bool found = false;
            var users = userController.Get();
            foreach (var user in users.Value)
                if (UsersEqual(user, model))
                {
                    found = true; break;
                }

            Assert.True(found);
        }
    }
}
