import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './List.css'
import { TodoItem } from '../TodoItem/TodoItem'

export const List = ({ todos, onToggleCompleted, onDeleteTodo }) => {
  const [completedTasks, setCompletedTasks] = useState({})

  const handleToggleCompleted = id => {
    const updatedCompletedTasks = { ...completedTasks, [id]: !completedTasks[id] }
    setCompletedTasks(updatedCompletedTasks)
    onToggleCompleted(id)
  }

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
        <div>
            <ul>
                {todos.map(({ id, completed, title }) => (
                    <TodoItem
                      key={id}
                      id={id}
                      completed={completed}
                      title={title}
                      onToggleCompleted={handleToggleCompleted}
                      onDeleteTodo={onDeleteTodo}/>
                ))}
            </ul>
        </div>
  )
}

List.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
}
