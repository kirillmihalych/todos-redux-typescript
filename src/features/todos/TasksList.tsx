import { useAppSelector } from '../../app/hooks'

const TasksList = () => {
  const tasks = useAppSelector((state) => state.todos.tasks)

  return (
    <div>
      {tasks.map((task) => {
        return (
          <article key={task.id}>
            <h3>{task.content}</h3>
          </article>
        )
      })}
    </div>
  )
}

export default TasksList
