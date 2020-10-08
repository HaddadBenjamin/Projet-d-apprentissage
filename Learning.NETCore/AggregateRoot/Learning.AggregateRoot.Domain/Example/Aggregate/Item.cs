﻿using System;
using System.Collections.Generic;
using System.Linq;
using Learning.AggregateRoot.Domain.Example.Commands;
using Learning.AggregateRoot.Domain.Example.Events;
using Learning.AggregateRoot.Domain.Extensions;

namespace Learning.AggregateRoot.Domain.Example.Aggregate
{
    public class Item : AggregateRoot
    {
        public string Name { get; set; }

        public HashSet<ItemLocation> Locations { get; set; }

        public Item Create(CreateItem command)
        {
            Id = Guid.NewGuid();
            Name = command.Name;
            Locations = command.Locations.Select(l => new ItemLocation
            {
                Id = Guid.NewGuid(),
                ItemId = Id,
                Name = l
            }).ToHashSet();

            RaiseEvent(new ItemWriteEvent(Id));

            return this;
        }

        public void Update(UpdateItem command)
        {
            Name = command.Name;
            Locations = command.Locations.Select(l => new ItemLocation
            {
                Id = Guid.NewGuid(),
                ItemId = Id,
                Name = l
            }).ToHashSet();

            RaiseEvent(new ItemWriteEvent(Id));
        }

        public void Deactivate(DeleteItem command)
        {
            IsActive = false;

            RaiseEvent(new ItemWriteEvent(Id));
        }
    }
}