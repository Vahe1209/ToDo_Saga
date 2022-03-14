export type Todo = {
  id: string
  title: string
  isCompleted: boolean
}

interface StoreType {
  todos: Todo[]
}

export default StoreType
