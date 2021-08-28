import { ITodo } from './todos.model';

export enum TodoAction
{
    GET_TODOS_REQUEST = "todos/GET_TODOS_REQUEST",
    GET_TODOS_SUCCESS = "todos/GET_TODOS_SUCCESS",
    GET_TODOS_FAILED = "todos/GET_TODOS_FAILED",

    ADD_TODO_REQUEST = "todos/ADD_TODO_REQUEST",
    ADD_TODO_SUCCESS = "todos/ADD_TODO_SUCCESS",
    ADD_TODO_FAILED = "todos/ADD_TODO_FAILED",

    EDIT_TODO_REQUEST = "todos/EDIT_TODO_REQUEST",
    EDIT_TODO_SUCCESS = "todos/EDIT_TODO_SUCCESS",
    EDIT_TODO_FAILED = "todos/EDIT_TODO_FAILED",
    
    TOGGLE_TODO_REQUEST = "todos/TOGGLE_TODO_REQUEST",
    TOGGLE_TODO_SUCCESS = "todos/TOGGLE_TODO_SUCCESS",
    TOGGLE_TODO_FAILED = "todos/TOGGLE_TODO_FAILED",

    REMOVE_TODO_REQUEST = "todos/REMOVE_TODO_REQUEST",
    REMOVE_TODO_SUCCESS = "todos/REMOVE_TODO_SUCCESS",
    REMOVE_TODO_FAILED = "todos/REMOVE_TODO_FAILED"
}

export interface GetTodosRequestAction
{ 
    type: TodoAction.GET_TODOS_REQUEST
}

export interface GetTodosSuccessAction
{ 
    type: TodoAction.GET_TODOS_SUCCESS
    payload : ITodo[]
}

export interface GetTodosFailedAction
{ 
    type: TodoAction.GET_TODOS_FAILED
    error : string
}

export interface AddTodoRequestAction
{ 
    type: TodoAction.ADD_TODO_REQUEST
    payload : { title : string }
}

export interface AddTodoSuccessAction
{ 
    type: TodoAction.ADD_TODO_SUCCESS
    payload : ITodo
}

export interface AddTodoFailedAction
{ 
    type: TodoAction.ADD_TODO_FAILED
    error : string
}

export interface EditTodoRequestAction
{ 
    type: TodoAction.EDIT_TODO_REQUEST
    payload : { id : string, title : string }
}

export interface EditTodoSuccessAction
{ 
    type: TodoAction.EDIT_TODO_SUCCESS
    payload : ITodo
}

export interface EditTodoFailedAction
{ 
    type: TodoAction.EDIT_TODO_FAILED
    error : string
}

export interface ToggleTodoRequestAction
{ 
    type: TodoAction.TOGGLE_TODO_REQUEST
    payload : { id : string }
}

export interface ToggleTodoSuccessAction
{ 
    type: TodoAction.TOGGLE_TODO_SUCCESS
    payload : ITodo
}

export interface ToggleTodoFailedAction
{ 
    type: TodoAction.TOGGLE_TODO_FAILED
    error : string
}

export interface RemoveTodoRequestAction
{ 
    type: TodoAction.REMOVE_TODO_REQUEST
    payload : { id : string }
}

export interface RemoveTodoSuccessAction
{ 
    type: TodoAction.REMOVE_TODO_SUCCESS
    payload : { id : string }
}

export interface RemoveTodoFailedAction
{ 
    type: TodoAction.REMOVE_TODO_FAILED
    error : string
}

export const getTodosRequestAction = () : GetTodosRequestAction => ({
    type : TodoAction.GET_TODOS_REQUEST,
})

export const getTodosSuccessAction = (payload : ITodo[]) : GetTodosSuccessAction => ({
    type : TodoAction.GET_TODOS_SUCCESS,
    payload
})

export const getTodosFailedAction = (error : string) : GetTodosFailedAction => ({
    type : TodoAction.GET_TODOS_FAILED,
    error
})

export const addTodoRequestAction = (title : string) : AddTodoRequestAction => ({
    type : TodoAction.ADD_TODO_REQUEST,
    payload : { title }
})

export const addTodoSuccessAction = (payload : ITodo) : AddTodoSuccessAction => ({
    type : TodoAction.ADD_TODO_SUCCESS,
    payload
})

export const addTodoFailedAction = (error : string) : AddTodoFailedAction => ({
    type : TodoAction.ADD_TODO_FAILED,
    error
})

export const editTodoRequestAction = (id : string, title : string) : EditTodoRequestAction => ({
    type : TodoAction.EDIT_TODO_REQUEST,
    payload : { id, title }
})

export const editTodoSuccessAction = (payload : ITodo) : EditTodoSuccessAction => ({
    type : TodoAction.EDIT_TODO_SUCCESS,
    payload
})

export const editTodoFailedAction = (error : string) : EditTodoFailedAction => ({
    type : TodoAction.EDIT_TODO_FAILED,
    error
})

export const toggleTodoRequestAction = (id: string) : ToggleTodoRequestAction => ({ 
    type: TodoAction.TOGGLE_TODO_REQUEST,
    payload : { id } 
})

export const toggleTodoSuccessAction = (payload : ITodo) : ToggleTodoSuccessAction => ({ 
    type: TodoAction.TOGGLE_TODO_SUCCESS,
    payload
})

export const toggleTodoFailedAction = (error : string) : ToggleTodoFailedAction => ({ 
    type: TodoAction.TOGGLE_TODO_FAILED,
    error
})

export const removeTodoRequestAction = (id: string) : RemoveTodoRequestAction => ({ 
    type: TodoAction.REMOVE_TODO_REQUEST,
    payload : { id } 
})

export const removeTodoSuccessAction = (id: string) : RemoveTodoSuccessAction => ({ 
    type: TodoAction.REMOVE_TODO_SUCCESS,
    payload : { id } 
})

export const removeTodoFailedAction = (error : string) : RemoveTodoFailedAction => ({ 
    type: TodoAction.REMOVE_TODO_FAILED,
    error 
})

export type TodoActions = 
    GetTodosRequestAction |
    GetTodosSuccessAction |
    GetTodosFailedAction |
    
    AddTodoRequestAction |
    AddTodoSuccessAction |
    AddTodoFailedAction |
    
    EditTodoRequestAction |
    EditTodoSuccessAction |
    EditTodoFailedAction |
    
    ToggleTodoRequestAction |
    ToggleTodoSuccessAction |
    ToggleTodoFailedAction |
    
    RemoveTodoRequestAction | 
    RemoveTodoSuccessAction | 
    RemoveTodoFailedAction 