import { createTodo, updateTodo, toggleTodo, deleteTodo, updateTodoFilters } from './todo.action'
import { ITodoFilters, ITodo } from './todo.model'
import { newGuid } from '../../shared/helpers/stringHelpers'
import produce, { Draft } from 'immer'
import { isType } from 'typescript-fsa'
import { Action } from 'redux'
import ActionStatus from '../../shared/models/actionStatus'
import IActionMetadata from '../../shared/models/actionMetadata'

export interface ITodosState
{
    todos : ITodo[]
    filters : ITodoFilters
    createAction : IActionMetadata
}

export const initialTodoState : ITodosState =
{
    todos : [
        { id : newGuid(), title : "Faire le lit", completed : false },
        { id : newGuid(), title : "Ranger le lave vaiselle", completed : false }
    ],
    filters :
    {
        terms : '',
        onlyUncompleted : false
    },
    createAction : { errorMessage : null, status : ActionStatus.Loaded }
}

const getTodoOrThrowError = (draft : Draft<ITodosState>, id : string) : Draft<ITodo> =>
{
    const todo = draft.todos.find(todo => todo.id === id)

    if (!todo)
        throw new Error("Cannot find todo with id: " + id)

    return todo
}

// With Immer & Typescript-fsa
export default (state : ITodosState = initialTodoState, action : Action) => produce(state, draft => 
{
    if (isType(action, createTodo.started))
        draft.createAction = { status : ActionStatus.Loading, errorMessage : null }

    if (isType(action, createTodo.done))
    { 
        draft.createAction.status = ActionStatus.Loaded
        draft.todos.push(action.payload.result.todo)
    }

    if (isType(action, createTodo.failed))
        draft.createAction = { status : ActionStatus.Failed, errorMessage : action.payload.error.errorMessage }

    if (isType(action, updateTodo))
        getTodoOrThrowError(draft, action.payload.id).title = action.payload.newTitle

    if (isType(action, toggleTodo))
    {
        const todo = getTodoOrThrowError(draft, action.payload.id)
        todo.completed = !todo.completed
    }

    if (isType(action, deleteTodo))
        draft.todos = draft.todos.filter(todo => todo.id !== action.payload.id)
    
    if (isType(action, updateTodoFilters))
        draft.filters = action.payload.filters
})

// Without Immer & Typescript-fsa
// export default function todoReducer(state : ITodosState = initialTodoState, action : TodoActions) : ITodosState
// {   
//     switch (action.type)
//     {
//         case TodoActionTypes.CREATE_TODO :
//             return {
//                 ...state,
//                 todos : [ ...state.todos, { id : newGuid(), title : action.payload.title, completed : false } ]
//             }

//         case TodoActionTypes.UPDATE_TODO :
//             return { 
//                 ...state,
//                 todos : state.todos.map(todo => todo.id === action.payload.id ?
//                                     { ...todo, title : action.payload.newTitle } : todo)
//             }

//         case TodoActionTypes.TOGGLE_TODO :
//             return { 
//                 ...state, 
//                 todos : state.todos.map(todo => todo.id === action.payload.id ?
//                                         { ...todo, completed : !todo.completed } : todo)
//             }
       
//         case TodoActionTypes.DELETE_TODO :
//             return { ...state, todos : state.todos.filter(todo => todo.id !== action.payload.id) }

//         case TodoActionTypes.UPDATE_TODO_FILTERS :
//             return { ...state, filters : { ...action.payload } }

//         // Without this line, the state is undefined at first init
//         default : return state
//     }
// }