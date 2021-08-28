import { ITodo } from "./todos.model";
import { ActionStatus, IActionMetadata } from '../../shared/domains/Redux/redux.model';

export interface TodoState extends IActionMetadata
{ 
    todos : ITodo[]
};

export const initialTodosState : TodoState = 
{
    status : ActionStatus.Loading,
    error : undefined,
    todos : [
    { 
        id : "1",
        title : "Faire le ménage",
        completed : true,
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
]}
