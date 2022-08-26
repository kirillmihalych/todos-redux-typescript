import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface Tasks {
  id: string
  content: string
}

interface TodosState {
  tasks: Tasks[]
}

const initialState: TodosState = {
  tasks: [],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Tasks>) => {
      state.tasks = [...state.tasks, action.payload]
    },
  },
})

export const { addTask } = todosSlice.actions

export const selectTodos = (state: RootState) => state.todos.tasks

export default todosSlice.reducer
