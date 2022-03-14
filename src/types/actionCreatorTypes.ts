import {
  MarkCompleteAction,
  MarkIncompleteAction,
  DeleteTodoAction,
  CreateTodoAction,
  GetTodos,
} from './actionsType'

export type MarkCompleteActionCreator = (id: string) => MarkCompleteAction

export type MarkIncompleteActionCreator = (id: string) => MarkIncompleteAction

export type DeleteTodoActionCreator = (id: string) => DeleteTodoAction

export type CreateTodoActionCreator = (title: string) => CreateTodoAction

export type GetTodosActionCreator = () => GetTodos
