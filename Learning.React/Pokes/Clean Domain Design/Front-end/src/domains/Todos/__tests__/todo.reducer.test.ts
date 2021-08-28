import {todosReducer} from "../todos.reducer";
import {
    emptyTodoStateMock,
    errorMessageMock,
    todoIdMock,
    todoMock,
    todoStateMock,
    todoTitleMock
} from "../todos.mock";
import {
    addTodoFailedAction,
    addTodoRequestAction,
    addTodoSuccessAction,
    editTodoFailedAction,
    editTodoRequestAction,
    editTodoSuccessAction,
    getTodosFailedAction,
    getTodosRequestAction,
    getTodosSuccessAction,
    removeTodoFailedAction,
    removeTodoRequestAction,
    removeTodoSuccessAction
} from "../todos.actions";
import {ActionStatus} from "../../../shared/domains/Redux/redux.model";
import {TodoState} from "../todos.state";
import {ITodo} from "../todos.model";

describe("todo.reducer", () =>
{
    describe("GET_TODOS", () =>
    {
        it("Should change the status to loading and set the error to undefined on request", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, getTodosRequestAction())

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Loading,
                error: undefined
            }))
        })

        it("Should set the todos, change the status to loaded and set the error to undefined on success", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, getTodosSuccessAction(todoStateMock.todos))

            // Then
            expect(newState).toEqual({
                status: ActionStatus.Loaded,
                error: undefined,
                todos : todoStateMock.todos
            })
        })

        it("Should change the status to failed and set the error on failed", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, getTodosFailedAction(errorMessageMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Failed,
                error: errorMessageMock,
            }))
        })
    })

    describe("ADD_TODO", () =>
    {
        it("Should change the status to loading and set the error to undefined on request", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, addTodoRequestAction(todoTitleMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Loading,
                error: undefined
            }))
        })

        it("Should add the todo, change the status to loaded and set the error to undefined on success", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, addTodoSuccessAction(todoMock))

            // Then
            expect(newState).toEqual<TodoState>({
                status: ActionStatus.Loaded,
                error: undefined,
                todos : [todoMock]
            })
        })

        it("Should change the status to failed and set the error on failed", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, addTodoFailedAction(errorMessageMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Failed,
                error: errorMessageMock,
            }))
        })
    })

    describe("EDIT_TODO", () =>
    {
        it("Should change the status to loading and set the error to undefined on request", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, editTodoRequestAction(todoIdMock, todoTitleMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Loading,
                error: undefined
            }))
        })

        it("Should edit the todo, change the status to loaded and set the error to undefined on success", () =>
        {
            // Given & When
            const editedTodo : ITodo = { ...todoMock, title : todoTitleMock }
            const newState = todosReducer(todoStateMock, editTodoSuccessAction(editedTodo))
            const firstTodo = newState.todos[0]

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Loaded,
                error: undefined,
            }))
            expect(firstTodo).toBe(editedTodo)
        })

        it("Should change the status to failed and set the error on failed", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, editTodoFailedAction(errorMessageMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Failed,
                error: errorMessageMock,
            }))
        })
    })

    describe("REMOVE_TODO", () =>
    {
        it("Should change the status to loading and set the error to undefined on request", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, removeTodoRequestAction(todoIdMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Loading,
                error: undefined
            }))
        })

        it("Should remove the todo, change the status to loaded and set the error to undefined on success", () =>
        {
            // Given & When
            const newState = todosReducer(todoStateMock, removeTodoSuccessAction(todoIdMock))
            const newTodos : ITodo[] = [todoStateMock.todos[0], todoStateMock.todos[2], todoStateMock.todos[3]]

            // Then
            expect(newState).toEqual({
                status: ActionStatus.Loaded,
                error: undefined,
                todos : newTodos
            })
        })

        it("Should change the status to failed and set the error on failed", () =>
        {
            // Given & When
            const newState = todosReducer(emptyTodoStateMock, removeTodoFailedAction(errorMessageMock))

            // Then
            expect(newState).toEqual(expect.objectContaining({
                status: ActionStatus.Failed,
                error: errorMessageMock,
            }))
        })
    })
})