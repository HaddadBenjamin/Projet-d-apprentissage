import { TodoState, initialTodosState } from './todos.state';
import { TodoActions, TodoAction } from './todos.actions';
import { failedActionMetadata, loadedActionMetadata, loadingActionMetadata } from '../../shared/domains/Redux/redux.utils';

export const todosReducer = (state: TodoState = initialTodosState, action: TodoActions) 
: TodoState =>
{
    switch (action.type)
    {
        case TodoAction.GET_TODOS_REQUEST :     return loadingActionMetadata(state)
        case TodoAction.GET_TODOS_SUCCESS :     return { ...loadedActionMetadata(state), todos: action.payload }
        case TodoAction.GET_TODOS_FAILED :      return failedActionMetadata(action.error, state)

        case TodoAction.ADD_TODO_REQUEST :      return loadingActionMetadata(state)
        case TodoAction.ADD_TODO_SUCCESS :      return { ...loadedActionMetadata(state), todos: [...state.todos, action.payload] }
        case TodoAction.ADD_TODO_FAILED :       return failedActionMetadata(action.error, state)
     
        case TodoAction.EDIT_TODO_REQUEST :     return loadingActionMetadata(state)
        case TodoAction.EDIT_TODO_SUCCESS :     return { ...loadedActionMetadata(state), todos: state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo) }
        case TodoAction.EDIT_TODO_FAILED :      return failedActionMetadata(action.error, state)

        case TodoAction.TOGGLE_TODO_REQUEST :   return loadingActionMetadata(state)
        case TodoAction.TOGGLE_TODO_SUCCESS :   return { ...loadedActionMetadata(state), todos : state.todos.map(todo => todo.id === action.payload.id ? action.payload : todo) }
        case TodoAction.TOGGLE_TODO_FAILED :    return failedActionMetadata(action.error, state)

        case TodoAction.REMOVE_TODO_REQUEST :   return loadingActionMetadata(state)
        case TodoAction.REMOVE_TODO_SUCCESS :   return { ...loadedActionMetadata(state), todos : state.todos.filter(todo => todo.id !== action.payload.id) }
        case TodoAction.REMOVE_TODO_FAILED :    return failedActionMetadata(action.error, state)

        default : return state
    }
}