﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace Learning.PartialFields
{
    public abstract class PartialMapper<TSource, TDestination>
        where TSource : class 
        where TDestination : class
    {
        private readonly IPartialFields _fieldsToMap;
        private readonly Dictionary<string, Action<TSource, TDestination>> _mappers = new Dictionary<string, Action<TSource, TDestination>>();

        public PartialMapper(IPartialFields fieldsToMap) => _fieldsToMap = fieldsToMap;

        public TDestination Map(TSource source)
        {
            var destination = Activator.CreateInstance(typeof(TDestination)) as TDestination;
            var sourceProperties = typeof(TSource).GetProperties();
            var destinationProperties = typeof(TDestination).GetProperties();

            foreach (var sourceProperty in sourceProperties)
            {
                var propertyName = sourceProperty.Name;

                if (!_fieldsToMap.Contains(propertyName))
                    continue;
                
                if (_mappers.ContainsKey(propertyName))
                    _mappers[propertyName](source, destination);
                else
                {
                    var destinationProperty = destinationProperties.FirstOrDefault(f => f.Name == propertyName);

                    if (destinationProperty.PropertyType == sourceProperty.PropertyType)
                        destinationProperty.SetValue(destination, sourceProperty.GetValue(source));
                }
            }

            return destination;
        }

        /// <summary>
        /// Call this method if the mapping is complex, all simple mapping have been done automatically.
        /// </summary>
        protected void AddMappers(params (string field, Action<TSource, TDestination> action)[] mappers)
        {
            foreach (var mapper in mappers)
                _mappers[mapper.field] = mapper.action;
        }
    }
}