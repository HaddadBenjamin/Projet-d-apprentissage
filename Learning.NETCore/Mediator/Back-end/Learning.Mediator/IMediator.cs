﻿using System;
using System.Collections.Concurrent;
using System.Threading.Tasks;

namespace Learning.Mediator
{
    public interface IMediator
    {
        #region Commands
        void Send(ICommand command);

        TResponse Send<TResponse>(ICommand<TResponse> command);

        Task SendAsync(ICommand command);
       
        Task<TResponse> SendAsync<TResponse>(ICommand<TResponse> command);
        #endregion

        #region Queries
        TResponse Send<TResponse>(IQuery<TResponse> query);
     
        Task<TResponse> SendAsync<TResponse>(IQuery<TResponse> query);
        #endregion

        #region Events
        void Send<TResponse>(IEvent @event);

        Task SendAsync<TResponse>(IEvent @event);
        #endregion
    }

    public class Mediator : IMediator
    {
        // Register dependencies to optimize, mediator should be singleton
        private readonly IServiceProvider _serviceProvider;

        public Mediator(IServiceProvider serviceProvider) => _serviceProvider = serviceProvider;

        public void Send(ICommand command) =>
            ((ICommandHandler<ICommand>)_serviceProvider.GetService(typeof(ICommandHandler<ICommand>))).Handle(command);

        public TResponse Send<TResponse>(ICommand<TResponse> command)
        {
            var handler = (ICommandHandler<ICommand<TResponse>, TResponse>)_serviceProvider.GetService(typeof(ICommandHandler<ICommand<TResponse>, TResponse>));

            return handler.Handle(command);
        }

        public Task SendAsync(ICommand command) =>
            ((ICommandHandlerAsync<ICommand>)_serviceProvider.GetService(typeof(ICommandHandlerAsync<ICommand>))).Handle(command);


        public Task<TResponse> SendAsync<TResponse>(ICommand<TResponse> command)
        {
            var handler = (ICommandHandlerAsync<ICommand<TResponse>, TResponse>)_serviceProvider.GetService(typeof(ICommandHandlerAsync<ICommand<TResponse>, TResponse>));

            return handler.Handle(command);
        }

        public TResponse Send<TResponse>(IQuery<TResponse> query)
        {
            var handler = (IQueryHandler<IQuery<TResponse>, TResponse>)_serviceProvider.GetService(typeof(IQueryHandler<IQuery<TResponse>, TResponse>));

            return handler.Handle(query);
        }

        public Task<TResponse> SendAsync<TResponse>(IQuery<TResponse> query)
        {
            var handler = (IQueryHandlerAsync<IQuery<TResponse>, TResponse>)_serviceProvider.GetService(typeof(IQueryHandlerAsync<IQuery<TResponse>, TResponse>));

            return handler.Handle(query);
        }

        public void Send<TResponse>(IEvent @event) =>
            ((IEventHandler<IEvent>)_serviceProvider.GetService(typeof(IEventHandler<IEvent>))).Handle(@event);

        public Task SendAsync<TResponse>(IEvent @event) =>
            ((IEventHandlerAsync<IEvent>)_serviceProvider.GetService(typeof(IEventHandlerAsync<IEvent>))).Handle(@event);

    }
}