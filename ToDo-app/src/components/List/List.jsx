import PropTypes from 'prop-types'
import './List.css'

export const List = ({ todos, onToggleCompleted, onDeleteTodo }) => {
  console.log(todos)

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {
                    todos.map(({id, completed, title}) => (
                        <div className='task-container'
                             key={id}>
                            <li>
                                <div 
                                className='task-label'>
                                <input
                                    type="checkbox"
                                    checked={completed}
                                    onChange={() => onToggleCompleted(id)}
                                />
                                {title}
                                </div>
                            </li>
                            <button onClick={() => onDeleteTodo(id)}>
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
            title:PropTypes.string.isRequired,
            completed:PropTypes.bool.isRequired
        })
    ),
    onToggleCompleted: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired
}
