﻿using System;
using System.Linq;
using Learning.AggregateRoot.Domain.Interfaces.AuthentificationContext;

namespace Learning.AggregateRoot.Infrastructure.Example
{
    public class FakeAuthentificationContextUserProvider : IAuthentificationContextUserProvider
    {
        private readonly FakeAuthentificationContextUser[] Users = new FakeAuthentificationContextUser[]
        {
            new FakeAuthentificationContextUser
            {
                Email = "toto@gmail.com",
                FirstName = "toto",
                LastName = "julius",
                Id = Guid.NewGuid(),
                IsSupport = true,
            }
        };

        public IAuthentificationContextUser Get(string email) => Users.SingleOrDefault(u => u.Email == email);
    }
}