import React, { useState } from 'react'
import Checkbox from '../../shared/components/Checkbox'
import TextInput from '../../shared/components/TextInput'
import Button, { ButtonColor } from '../../shared/components/Button'
import{ Todo } from './todo.model'
import { deleteTodo, toggleTodo, updateTodo } from './todo.action'
import { useDispatch } from 'react-redux'

interface Props
{
    todo : Todo
}

const TodoRow = React.memo<Props>(({ todo }) =>
{
    const [title, setTitle] = useState<string>(todo.title)
    const dispatch = useDispatch()

    const onCompletedChange = (isChecked : boolean, id : string) => dispatch(toggleTodo(todo.id))
    const onTitleChange = (value : string, id : string) => setTitle(value)
    const handleOnClickOnPublishEdition = () => dispatch(updateTodo(todo.id, title))
    const handleOnClickOnDelete = () => dispatch(deleteTodo(todo.id))

    return <tr>
        <td>
            <Checkbox 
                id={`todo toggle ${todo.id}`}
                checked={todo.completed}
                onChange={onCompletedChange}/>
        </td>

        <td>
            <TextInput
                id={`todo input ${todo.id}`}
                defaultValue={todo.title}
                onChange={onTitleChange}/>
        </td>

        <td>
            <Button 
                onClick={handleOnClickOnPublishEdition} 
                icon='edit'
                style={{width : '2.5rem'}}/>
        </td>

        <td>
            <Button 
                onClick={handleOnClickOnDelete} 
                color={ButtonColor.Danger}
                icon='trash'/>
        </td>
    </tr>
})

export default TodoRow