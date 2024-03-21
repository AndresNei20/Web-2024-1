import PropTypes from 'prop-types';
import './TodoItem.css'



export const TodoItem = ({ id, completed, title, onToggleCompleted, onDeleteTodo}) => {

    const handleToggleCompleted = () => {
        onToggleCompleted(id, !completed);
      };

    const handleDeleteTodo = () => {
        onDeleteTodo(id)
    }

  return (
    <div
        className='task-container'
        key={id}
        style={{ backgroundColor: completed ? '#CAF7E7' : '#ccc' }}>
        <li>
            <div className='task-label'>
                <input
                    type="checkbox"
                    id={`checkbox_${id}`} 
                    name={`checkbox_${id}`}
                    className='checkbox'
                    checked={completed}
                    onChange={handleToggleCompleted}
                />
                <label> {title} </label>
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
