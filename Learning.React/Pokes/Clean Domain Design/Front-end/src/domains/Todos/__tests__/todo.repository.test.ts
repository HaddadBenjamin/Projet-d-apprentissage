import {createTodo} from "../todos.repository";
import {todoTitleMock} from "../todos.mock";

describe("todo.repository", () =>
{
    it("createTodo should set completed to false and title retrieved from parameter", () =>
    {
        // Given & When
        const todo = createTodo(todoTitleMock)

        // Then
        expect(todo).toEqual(expect.objectContaining({
            title : todoTitleMock,
            completed : false
        }))
    })
})