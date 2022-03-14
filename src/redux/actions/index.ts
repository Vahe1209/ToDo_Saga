import {
  MarkCompleteActionCreator,
  MarkIncompleteActionCreator,
  DeleteTodoActionCreator,
  CreateTodoActionCreator,
  GetTodosActionCreator,
} from '../../types/actionCreatorTypes'

export const markComplete: MarkCompleteActionCreator = (id) => {
  return {
    type: 'MARK_COMPLETE',
    id,
  }
}

export const markIncomplete: MarkIncompleteActionCreator = (id) => {
  return {
    type: 'MARK_INCOMPLETE',
    id,
  }
}

export const deleteTodo: DeleteTodoActionCreator = (id) => {
  return {
    type: 'DELETE_TODO',
    id,
  }
}

export const createTodo: CreateTodoActionCreator = (title) => {
  return {
    type: 'CREATE_TODO',
    title,
  }
}

export const getTodos: GetTodosActionCreator = () => {
  return {
    type: 'GET_TODOS',
  }
}
