import { onMounted, reactive, watch } from "vue"

type Todo = {
  id: number
  text: string
  done: boolean
  category: string
}

export const useTodos = () => {
  const state = reactive<{ todos: Todo[] }>({
    todos: [],
  })

  let nextId = 0

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
    state.todos = state.todos.filter((t) => t.id !== id)
  }

  watch(
    () => state.todos,
    (newTodos) => {
      localStorage.setItem(
        "todos",
        JSON.stringify(newTodos)
      )
    }
  )

  onMounted(() => {
    const saved = localStorage.getItem("todos")
    if (saved) {
      state.todos = JSON.parse(saved)
      nextId = state.todos.length + 1
    }
  })

  return { state, addTodo, toggleTodo, removeTodo }
}
