// eslint-disable-next-line
import { Reducer } from 'redux'
import { Todo } from '../../types/storeType'
import {
  CreatedTodoAction,
  DeletedTodoAction,
  GotTodos,
  MarkedCompleteAction,
  MarkedIncompleteAction,
} from '../../types/actionsType'

type Actions =
  | CreatedTodoAction
  | DeletedTodoAction
  | GotTodos
  | MarkedCompleteAction
  | MarkedIncompleteAction

const initialState: Todo[] = []

// eslint-disable-next-line
const todoReducer: Reducer<Todo[], Actions> = (state = initialState, action) => {
  switch (action?.type) {
    case 'CREATED_TODO':
      return [...state, action.todo]
    case 'DELETED_TODO':
      return [...state.filter((todo) => todo.id !== action.id)]
    case 'GOT_TODOS':
      return [...state, ...action.todos]
    case 'MARKED_COMPLETE':
    case 'MARKED_INCOMPLETE':
      return [
        ...state.map((todo) =>
          todo.id === action.id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        ),
      ]
    default:
      return [...state]
  }
}

export default todoReducer
