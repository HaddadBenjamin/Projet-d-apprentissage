import {fireEvent, render} from "@testing-library/react";
import AddTodo from "../AddTodo";
import {useDispatch} from "react-redux";
import {addTodoRequestAction} from "../../../todos.actions";

jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()

describe("AddTodo", () =>
{
    beforeEach(() => {
        (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch)
    })

    it("should match snapshot", () =>
    {
        // Given & When
        const { container } = render(<AddTodo />)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch addTodoRequestAction when title changed and button has been clicked", () =>
    {
        // Given
        const { container, getByText } = render(<AddTodo />)
        const input = container.getElementsByTagName('input')[0]
        const button = getByText('+')
        const newTitle = 'Faire la cuisine'

        // When
        fireEvent.change(input, {target: {value: newTitle}})
        fireEvent.click(button)

        // Then
        expect(input.value).toBe(newTitle)
        expect(mockDispatch).toBeCalledWith(addTodoRequestAction(newTitle))
    })
})