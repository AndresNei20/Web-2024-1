import PropTypes from 'prop-types'
import './List.css'

export const List = ({ todos, onToggleCompleted, onDeleteTodo }) => {
  console.log(todos)

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {
                    todos.map((todo) => (
                        <div className='task-container'
                            key={todo.id}>
                            <li>
                                <div className='task-label'>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => onToggleCompleted(todo.id)}
                                    />
                                    
                                    {todo.text}
                                </div>
                            </li>
                            <button 
                            className='delete-individual'
                            onClick={() => onDeleteTodo(todo.id)}>
                                Delete
                            </button>
                        </div>
                    ))
                }
            </ul>
        </div>

    )
}

List.propTypes = {
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            text:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })
    ),
    onToggleCompleted: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
}
