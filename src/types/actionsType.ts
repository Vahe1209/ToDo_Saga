import { Todo } from './storeType'

export interface MarkCompleteAction {
  type: 'MARK_COMPLETE'
  id: string
}

export interface MarkIncompleteAction {
  type: 'MARK_INCOMPLETE'
  id: string
}

export interface DeleteTodoAction {
  type: 'DELETE_TODO'
  id: string
}

export interface CreateTodoAction {
  type: 'CREATE_TODO'
  title: string
}

export interface GetTodos {
  type: 'GET_TODOS'
}

// For Reducers
export interface CreatedTodoAction {
  type: 'CREATED_TODO'
  todo: Todo
}

export interface DeletedTodoAction {
  type: 'DELETED_TODO'
  id: string
}

export interface MarkedCompleteAction {
  type: 'MARKED_COMPLETE'
  id: string
}

export interface MarkedIncompleteAction {
  type: 'MARKED_INCOMPLETE'
  id: string
}

export interface GotTodos {
  type: 'GOT_TODOS'
  todos: Todo[]
}

export const actionIds = {
  MARK_COMPLETE: 'MARK_COMPLETE',
  MARK_INCOMPLETE: 'MARK_INCOMPLETE',
  DELETE_TODO: 'DELETE_TODO',
  CREATE_TODO: 'CREATE_TODO',
  GET_TODOS: 'GET_TODOS',
}
