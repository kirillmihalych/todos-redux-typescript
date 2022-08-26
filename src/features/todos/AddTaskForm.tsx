import React, { useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { nanoid } from '@reduxjs/toolkit'
import { addTask } from '../todos/todosSlice'

const AddTaskForm = () => {
  const [task, setTask] = useState<string>('')

  const dispatch = useAppDispatch()

  const preventDefault = (e: React.FormEvent<HTMLFormElement>) =>
    e.preventDefault()
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTask(e.target.value)

  const onAddTask = () => {
    const id = nanoid()
    dispatch(addTask({ id, content: task }))

    setTask('')
  }

  return (
    <div>
      <h2>Задания</h2>
      <form onSubmit={preventDefault}>
        <label htmlFor='text'>Задание</label>
        <input
          type='text'
          name='text'
          placeholder='Поле ввода'
          value={task}
          onChange={handleChange}
        />
        <button type='submit' onClick={onAddTask}>
          Добавить
        </button>
      </form>
    </div>
  )
}

export default AddTaskForm
