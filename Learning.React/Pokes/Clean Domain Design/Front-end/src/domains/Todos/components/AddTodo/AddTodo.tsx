import { useState, ChangeEvent, FC } from 'react';
import "./AddTodo.module.scss"
import { newGuid } from '../../../../shared/utils/newGuid';
import { useDispatch } from 'react-redux';
import { addTodoRequestAction } from '../../todos.actions';
import styles from './AddTodo.module.scss'

const AddTodo : FC = () => {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const addTodoInContextAndModel = () => dispatch(addTodoRequestAction(title))

    const onChangeTodo = (event: ChangeEvent<HTMLInputElement>) : void =>
        setTitle(event.target.value)

    return  <div className={styles.todo}>
        <div className={styles.container}>
            <div className={styles.addButton} onClick={addTodoInContextAndModel}>+</div>
            <input
                onChange={onChangeTodo}
                value={title}
                placeholder="Ajouter une tâche"
                className={styles.input}/>
        </div>
    </div>
};

export default AddTodo;