import PropTypes from 'prop-types'
import { useEffect , useState } from 'react'; 
import './List.css'

const colors = {
    completed: 'CAF7E7', // Color for completed tasks  
};

export const List = ({ todos, onToggleCompleted, onDeleteTodo }) => {
   
    const [completedTasks, setCompletedTasks] = useState({});
  
    const handleToggleCompleted = id => {
        const updatedCompletedTasks = { ...completedTasks, [id]: !completedTasks[id] };
        setCompletedTasks(updatedCompletedTasks);
        onToggleCompleted(id); // Call the parent component function to update todo completion
    };

    useEffect(() => {
        console.log(todos);
    }, [todos]);

    return (
        <div>
            <ul>
                {todos.map(({ id, completed, title }) => (
                    <div
                        className='task-container'
                        key={id}
                        style={{ backgroundColor: completed ? `#${colors.completed}` : `#${colors.pending}` }}
                    >
                        <li>
                            <div className='task-label'>
                                <input
                                    type="checkbox"
                                    className='checkbox'
                                    checked={completed}
                                    onChange={() => handleToggleCompleted(id)}
                                />
                                {title}
                            </div>
                        </li>
                        <button
                            className='delete-individual'
                            onClick={() => onDeleteTodo(id)}
                        >
                            ⌫
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

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
};

  

