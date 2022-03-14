import { Todo } from '../types/storeType'
import {
  DeleteTodoActionCreator,
  MarkCompleteActionCreator,
  MarkIncompleteActionCreator,
  CreateTodoActionCreator,
  GetTodosActionCreator,
} from '../types/actionCreatorTypes'

interface AppPropType {
  todos: Todo[]
  deleteTodo: DeleteTodoActionCreator
  markComplete: MarkCompleteActionCreator
  markIncomplete: MarkIncompleteActionCreator
  createTodo: CreateTodoActionCreator
  getTodos: GetTodosActionCreator
}

export default AppPropType
