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
                        <li key={index}>
                            {todo.text}
                        </li>
                    ))
                }
            </ul>
        </div>

    )
}

List.propTypes = {
    todos: PropTypes.array.isRequired
}
