import { reactive, watch, onMounted } from "vue"

type Todo = {
  id: number
  text: string
  done: boolean
  category: string
}

const state = reactive<{ todos: Todo[] }>({
  todos: [],
})

let nextId = 1

const addTodo = (text: string, category: string) => {
  state.todos.push({
    id: nextId++,
    text,
    done: false,
    category,
  })
}

const toggleTodo = (id: number) => {
  const todo = state.todos.find((t) => t.id === id)
  if (todo) todo.done = !todo.done
}

const removeTodo = (id: number) => {
  state.todos.splice(
    state.todos.findIndex((t) => t.id === id),
    1
  )
}

watch(
  () => state.todos,
  (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos))
  },
  { deep: true }
)

const saved = localStorage.getItem("todos")
if (saved) {
  const parsed: Todo[] = JSON.parse(saved)
  state.todos.splice(0, state.todos.length, ...parsed)
  nextId = state.todos.length + 1
}

export const useTodos = () => ({
  state,
  addTodo,
  toggleTodo,
  removeTodo,
})
