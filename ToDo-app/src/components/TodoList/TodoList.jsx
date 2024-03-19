import PropTypes from 'prop-types'
import { useEffect } from 'react'
import './TodoList.css'
import { TodoItem } from '../TodoItem/TodoItem'

export const TodoList = ({ todos, onToggleCompleted, onDeleteTodo }) => {

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
                      onToggleCompleted={onToggleCompleted}
                      onDeleteTodo={onDeleteTodo}/>
                ))}
            </ul>
        </div>
  )
}

TodoList.propTypes = {
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
