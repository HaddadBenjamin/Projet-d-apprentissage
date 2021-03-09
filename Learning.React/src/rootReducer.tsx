import { combineReducers } from 'redux'
import todoReducer, { initialTodoState, ITodosState } from './components/Todos/todo.reducer'

export interface IGlobalState
{
    todos : ITodosState
}

export const initialGlobalState : IGlobalState = { todos : initialTodoState }

export default combineReducers({ todos : todoReducer })