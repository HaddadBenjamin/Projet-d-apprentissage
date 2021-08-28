import {selectTodos} from "../todos.selector";
import {initialApplicationState} from "../../Root/root.state";
import {initialTodosState} from "../todos.state";

describe("todo.selector", () =>
{
    it("selectTodos should be defined and to be the initialTodoState", () =>
    {
        // Given & When
        const todoState = selectTodos(initialApplicationState)

        // Then
        expect(todoState).toBeDefined()
        expect(todoState).toEqual(initialTodosState)
    })
})