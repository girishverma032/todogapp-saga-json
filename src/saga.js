import { all, put, takeLatest } from 'redux-saga/effects';

import axios from 'axios'

function* fetchTodos() {
  let todos = []
  yield axios.get('http://localhost:1234/todos').then(res => {
    todos = res.data
  })
  yield put({ type: "TODOS_RECIEVED", todos: todos});
}

function* addTodo(data) {
    yield axios.post('http://localhost:1234/todos', data.payload)
    yield put({ type: "FETCH_TODOS"});
  }

function* deleteTodo(data) {
    yield axios.delete('http://localhost:1234/todos/'+data.payload)
    yield put({ type: "FETCH_TODOS"});
}

function* updateTodo(data) {
  yield axios.put('http://localhost:1234/todos/'+data.payload.id, data.payload)
  yield put({ type: "FETCH_TODOS"});
}

function* fetchTodosWatcher() {
     yield takeLatest('FETCH_TODOS', fetchTodos)
}

function* addTodosWatcher() {
    yield takeLatest('ADD_TODO', addTodo)
}

function* deleteTodoWatcher() {
    yield takeLatest('REMOVE_TODO', deleteTodo)
}

function* updateTodoWatcher() {
  yield takeLatest('UPDATE_TODO', updateTodo)
}

export default function* rootSaga() {
   yield all([
    fetchTodosWatcher(),
    addTodosWatcher(),
    deleteTodoWatcher(),
    updateTodoWatcher()
   ]);
}
