import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

interface TodosState {
  tasks: {
    id: string
    content: string
  }[]
}

const initialState: TodosState = {
  tasks: [
    {
      id: '1',
      content: 'task',
    },
  ],
}

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTask: (state: RootState, action: PayloadAction<string>) => {
      state.tasks = [...state.tasks, action.payload]
    },
  },
})

export const selectTodos = (state: RootState) => state.todos.tasks

export default todosSlice.reducer
