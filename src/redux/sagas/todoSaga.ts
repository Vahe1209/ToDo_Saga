import { AxiosResponse } from 'axios'
// eslint-disable-next-line
import { takeEvery, put, call, StrictEffect } from 'redux-saga/effects'
import todoApi from '../../api/todo-api'
import {
  CreatedTodoAction,
  DeletedTodoAction,
  MarkedCompleteAction,
  MarkedIncompleteAction,
  GotTodos,
  CreateTodoAction,
  DeleteTodoAction,
  MarkCompleteAction,
  MarkIncompleteAction,
  actionIds,
} from '../../types/actionsType'

function* createTodoWorker({ title }: CreateTodoAction) {
  try {
    const response: AxiosResponse = yield call(todoApi.post, '/todo', { title })
    switch (response.status) {
      case 201:
        const data: CreatedTodoAction = {
          type: 'CREATED_TODO',
          todo: response.data.data.todo,
        }
        yield put(data)
    }
  } catch (err) {
    console.log(err)
  }
}

function* deleteTodoWorker({ id }: DeleteTodoAction) {
  try {
    const response: AxiosResponse = yield call(todoApi.delete, `/todo/${id}`)
    switch (response.status) {
      case 200:
        const data: DeletedTodoAction = {
          type: 'DELETED_TODO',
          id,
        }
        yield put(data)
    }
  } catch (err) {
    console.log(err)
  }
}

function* markCompleteWorker({ id }: MarkCompleteAction) {
  try {
    const response: AxiosResponse = yield call(todoApi.patch, `/todo/${id}`, {
      isCompleted: true,
    })
    switch (response.status) {
      case 200:
        const data: MarkedCompleteAction = {
          type: 'MARKED_COMPLETE',
          id,
        }
        yield put(data)
    }
  } catch (err) {
    console.log(err)
  }
}

function* markIncompleteWorker({ id }: MarkIncompleteAction) {
  try {
    const response: AxiosResponse = yield call(todoApi.patch, `/todo/${id}`, {
      isCompleted: false,
    })
    switch (response.status) {
      case 200:
        const data: MarkedIncompleteAction = {
          type: 'MARKED_INCOMPLETE',
          id,
        }
        yield put(data)
    }
  } catch (err) {
    console.log(err)
  }
}

function* getTodosWorker() {
  try {
    const response: AxiosResponse = yield call(todoApi.get, '/todo')
    switch (response.status) {
      case 200:
        const data: GotTodos = {
          type: 'GOT_TODOS',
          todos: response.data.data.todos,
        }
        yield put(data)
    }
  } catch (err) {
    console.log(err)
  }
}

function* todoSaga(): Generator<StrictEffect> {
  yield takeEvery(actionIds.CREATE_TODO, createTodoWorker)
  yield takeEvery(actionIds.DELETE_TODO, deleteTodoWorker)
  yield takeEvery(actionIds.GET_TODOS, getTodosWorker)
  yield takeEvery(actionIds.MARK_COMPLETE, markCompleteWorker)
  yield takeEvery(actionIds.MARK_INCOMPLETE, markIncompleteWorker)
}

export default todoSaga
