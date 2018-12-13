using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Runtime.Serialization;
using Microsoft.CodeAnalysis.CSharp.Syntax;

public enum Role
{
    admin,
    user
}

namespace WebApplication2.Domain.Models
{
    public class UserModel : ModelBase
    { 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public Role Role { get; set; }
    }
    
}