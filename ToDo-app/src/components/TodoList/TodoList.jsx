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

