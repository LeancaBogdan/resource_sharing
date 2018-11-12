using System;

namespace Common.Domain.Models
{
    public abstract class BaseEntity
    {
        public Guid Id { get; protected set; }
    }
}