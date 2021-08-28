import { call, put, select, takeLatest } from 'redux-saga/effects'
import { addTodoFailedAction, AddTodoRequestAction, addTodoSuccessAction, editTodoFailedAction, EditTodoRequestAction, editTodoSuccessAction, getTodosFailedAction, GetTodosRequestAction, getTodosSuccessAction, removeTodoFailedAction, RemoveTodoRequestAction, removeTodoSuccessAction, TodoAction, toggleTodoFailedAction, ToggleTodoRequestAction, toggleTodoSuccessAction } from './todos.actions';
import { addTodo, getAllTodos, patchTitle, removeTodo, patchCompleted } from './todos.api';
import { ITodo } from './todos.model';
import { selectTodos } from './todos.selector';
import { TodoState } from './todos.state';
import {createTodo} from "./todos.repository";

function* getAllTodosSaga(action : GetTodosRequestAction)
{
   try
   {
      const todos : ITodo[] = yield call(getAllTodos);
      yield put(getTodosSuccessAction(todos));
   }
   catch (error)
   {
      yield put(getTodosFailedAction(error.message));
   }
}

function* addTodoSaga(action : AddTodoRequestAction)
{
   try
   {
      const newTodo : ITodo = yield call(addTodo, createTodo(action.payload.title));
      yield put(addTodoSuccessAction(newTodo));
   }
   catch (error)
   {
      yield put(addTodoFailedAction(error.message));
   }
}

function* editTodoSaga(action : EditTodoRequestAction)
{
   try
   {
      const { id, title } = action.payload
      const editedTodo : ITodo = yield call(patchTitle, id, title);
      yield put(editTodoSuccessAction(editedTodo));
   }
   catch (error)
   {
      yield put(editTodoFailedAction(error.message));
   }
}

function* toggleTodoSaga(action : ToggleTodoRequestAction)
{
   try
   {
      const { id } = action.payload      
      const todoState : TodoState = yield select(selectTodos);
      const todo : ITodo = todoState.todos.find(t => t.id === id) as ITodo
      const toggledTodo : ITodo = { ...todo, completed : !todo.completed}
   
      yield call(patchCompleted, id, toggledTodo.completed);
      yield put(toggleTodoSuccessAction(toggledTodo));
   }
   catch (error)
   {
      yield put(toggleTodoFailedAction(error.message));
   }
}

function* removeTodoSaga(action : RemoveTodoRequestAction)
{
   try
   {
        const { id } = action.payload

        yield call(removeTodo, id);
        yield put(removeTodoSuccessAction(id));
   }
   catch (error)
   {
      yield put(removeTodoFailedAction(error.message));
   }
}

function* watchTodosSagas() {
  yield takeLatest(TodoAction.GET_TODOS_REQUEST, getAllTodosSaga);
  yield takeLatest(TodoAction.ADD_TODO_REQUEST, addTodoSaga);
  yield takeLatest(TodoAction.EDIT_TODO_REQUEST, editTodoSaga);
  yield takeLatest(TodoAction.TOGGLE_TODO_REQUEST, toggleTodoSaga);
  yield takeLatest(TodoAction.REMOVE_TODO_REQUEST, removeTodoSaga);
}

export default watchTodosSagas;