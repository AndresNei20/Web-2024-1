import PropTypes from 'prop-types';
const colors = {
    completed: 'CAF7E7' // Color for completed tasks
  }

export const TodoItem = ({ id, completed, title, onToggleCompleted, onDeleteTodo}) => {

    const handleToggleCompleted = () => {
        onToggleCompleted(id)
    }

    const handleDeleteTodo = () => {
        onDeleteTodo(id)
    }

  return (
    <div
        className='task-container'
        key={id}
        style={{ backgroundColor: completed ? `#${colors.completed}` : `#${colors.pending}` }}>
        <li>
            <div className='task-label'>
                <input
                    type="checkbox"
                    className='checkbox'
                    checked={completed}
                    onChange={handleToggleCompleted}
                />
                {title}
             </div>
        </li>
        <button
            className='delete-individual'
            onClick={handleDeleteTodo}>
            ⌫
        </button>
    </div>
  )
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    onToggleCompleted: PropTypes.func.isRequired,
    onDeleteTodo: PropTypes.func.isRequired,
  };
