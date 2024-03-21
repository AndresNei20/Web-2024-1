import PropTypes from 'prop-types'
import { useEffect } from 'react'
import './TodoList.css'
import { TodoItem } from '../TodoItem/TodoItem'
import { useTodo } from '../../hooks/useTodo'

export const TodoList = () => {

  const { handleFilterTodos, toggleTodoCompleted, deleteTodo, todos } = useTodo()

  useEffect(() => {
    console.log(todos)
  }, [todos])

  return (
        <div>
            <ul>
                {handleFilterTodos().map(({ id, completed, title }) => ( // * im not sure about the handleFilterTodo
                    <TodoItem
                      key={id}
                      id={id}
                      completed={completed}
                      title={title}
                      onToggleCompleted={toggleTodoCompleted}
                      onDeleteTodo={deleteTodo}/>
                ))}
            </ul>
        </div>
  )
}

/* TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ),
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteTodo: PropTypes.func.isRequired
} */
