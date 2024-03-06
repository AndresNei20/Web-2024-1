import PropTypes from 'prop-types'
import './List.css'

export const List = ({todos}) => {
    console.log(todos)
    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {
                    todos.map((todo, index)=>(
                        <div className='task-container'
                             key={index}>
                        <li>
                            <div className='task-label'>
                                <input type="checkbox" />
                            {todo.text}
                            </div>
                        </li>
                        <button>
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
    todos: PropTypes.array.isRequired
}
