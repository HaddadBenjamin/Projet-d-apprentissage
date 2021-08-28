import {newGuid} from "../../shared/utils/newGuid";
import {ITodo} from "./todos.model";

export const createTodo = (title : string) : ITodo =>
({
    id : newGuid(),
    completed : false,
    title
})