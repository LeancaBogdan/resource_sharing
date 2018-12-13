using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using WebApplication2.Domain.Models;

namespace XUnitTestProject1
{
    public class MockDbSetUsers<T> : IQueryable where T : class
    {
        public Type ElementType => throw new NotImplementedException();

        public Expression Expression => throw new NotImplementedException();

        public IQueryProvider Provider => throw new NotImplementedException();

        public IEnumerator GetEnumerator()
        {
            throw new NotImplementedException();
        }
    }
}
