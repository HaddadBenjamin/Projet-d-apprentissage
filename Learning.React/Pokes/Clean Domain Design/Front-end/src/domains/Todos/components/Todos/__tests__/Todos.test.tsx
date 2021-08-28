import {useDispatch, useSelector} from "react-redux";
import {render} from "@testing-library/react";
import Todos from "../Todos";
import {todoStateMock} from "../../../todos.mock";
import {getTodosRequestAction} from "../../../todos.actions";

jest.mock('react-redux')
const mockUseDispatch = useDispatch as jest.MockedFunction<typeof useDispatch>
const mockDispatch = jest.fn()

describe("Todos", () => {
    beforeEach(() => {
        (mockUseDispatch as jest.Mock).mockReturnValue(mockDispatch)
    })

    it("should match snapshot", async () => {
        // Given
        (useSelector as jest.Mock).mockReturnValue(todoStateMock)

        // When
        const {container} = render(<Todos/>)

        // Then
        expect(container).toMatchSnapshot()
    })

    it("should dispatch getTodosRequestAction when component is mounted", () =>
    {
        // Given
        (useSelector as jest.Mock).mockReturnValue(todoStateMock)

        // When
        render(<Todos/>)

        // Then
        expect(mockDispatch).toBeCalledWith(getTodosRequestAction())
    })
})