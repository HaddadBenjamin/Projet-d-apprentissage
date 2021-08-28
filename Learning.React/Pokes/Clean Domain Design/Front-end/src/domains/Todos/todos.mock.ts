import {TodoState} from "./todos.state";
import {ActionStatus} from "../../shared/domains/Redux/redux.model";

export const emptyTodoStateMock : TodoState =
{
    status : ActionStatus.Loading,
    error : undefined,
    todos : []
}

export const todoStateMock : TodoState =
{
    ...emptyTodoStateMock,
    todos : [
        {
            id : "1",
            title : "Faire le ménage",
            completed : false,
        },
        {
            id : "2",
            title : "Faire ma compta",
            completed : true,
        },
        {
            id : "3",
            title : "Appeler Marine",
            completed : false,
        },
        {
            id : "4",
            title : "Acheter des croquettes pour petit chien",
            completed : false,
        },
    ]
}

export const todoMock = todoStateMock.todos[0]
export const {title : todoTitleMock, id : todoIdMock} = todoStateMock.todos[1]
export const errorMessageMock = '404 not found'