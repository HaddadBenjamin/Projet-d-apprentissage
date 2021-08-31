import {addTodo, getAllTodos, patchCompleted, patchTitle, removeTodo} from '../todo.api'
import {todoMock, todoStateMock} from '../todo.mock'
import axios from 'axios'
import {httpConfiguration, routes} from "../todo.configuration";

jest.mock('axios')

describe("todo.api", () =>
{
    it("getAllTodos should return all the todos and axios.get should be called with routes.api and httpConfiguration.default", () =>
    {
        // Given
        (axios.get as jest.Mock).mockReturnValue(Promise.resolve({ data : todoStateMock.todos }))

        // When
        const todos = getAllTodos()

        // Then
        expect(todos).toEqual(todoStateMock.todos)
        expect(axios.get).toHaveBeenCalledWith(routes.api, httpConfiguration.default);
    })

    it("addTodo should return add a todo and axios.post should be called with routes.api and httpConfiguration.default", () =>
    {
        // Given
        (axios.post as jest.Mock).mockReturnValue(Promise.resolve({ data : todoMock }))

        // When
        const todo = addTodo(todoMock)

        // Then
        expect(todo).toEqual(todoMock)
        expect(axios.post).toHaveBeenCalledWith(routes.api, httpConfiguration.default);
    })

    it("patchTitle should patch the todo title and axios.patch should be called with routes.api/id and httpConfiguration.default", () =>
    {
        // Given
        (axios.patch as jest.Mock).mockReturnValue(Promise.resolve({ data : todoMock }))

        // When
        const todo = patchTitle(todoMock.id, todoMock.title)

        // Then
        expect(todo).toEqual(todoMock)
        expect(axios.patch).toHaveBeenCalledWith(`${routes.api}/id`, httpConfiguration.default);
    })

    it("patchCompleted should patch the todo completed and axios.patch should be called with routes.api/id and httpConfiguration.default", () =>
    {
        // Given
        (axios.patch as jest.Mock).mockReturnValue(Promise.resolve({ data : todoMock }))

        // When
        const todo = patchCompleted(todoMock.id, todoMock.completed)

        // Then
        expect(todo).toEqual(todoMock)
        expect(axios.patch).toHaveBeenCalledWith(`${routes.api}/id`, httpConfiguration.default);
    })

    it("removeTodo should remove the todo and axios.delete should be called with routes.api/id and httpConfiguration.default", () =>
    {
        // Given
        (axios.delete as jest.Mock).mockReturnValue(Promise.resolve({ data : todoMock }))

        // When
        const todo = removeTodo(todoMock.id)

        // Then
        expect(todo).toEqual(todoMock)
        expect(axios.delete).toHaveBeenCalledWith(`${routes.api}/id`, httpConfiguration.default);
    })
})