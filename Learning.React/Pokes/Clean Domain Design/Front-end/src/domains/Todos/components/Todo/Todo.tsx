import React, {ChangeEvent, FC} from 'react';
import './Todo.module.scss'
import { ITodo } from '../../todos.model';
import { editTodoRequestAction, removeTodoRequestAction, toggleTodoRequestAction } from '../../todos.actions';
import { useDispatch } from 'react-redux';
import styles from './Todo.module.scss'

const Todo : FC<ITodo> = ({ id, title, completed }) =>
{
    const dispatch = useDispatch()

    const onChangeTitle = (event : ChangeEvent<HTMLInputElement>) => dispatch(editTodoRequestAction(id, event.target.value))
    const onChecked = () => dispatch(toggleTodoRequestAction(id))
    const onRemove = () => dispatch(removeTodoRequestAction(id))

    return <div className={styles.todo}>
        <div>
            <input type="checkbox" checked={completed} onChange={onChecked} className={styles.toggle}/>
            <input className={styles.content} defaultValue={title} onChange={onChangeTitle}/>
        </div>
        <div className={styles.removeButton} onClick={onRemove}>X</div>
    </div>
};

export default Todo;