import PropTypes from 'prop-types'
import './List.css'

export const List = ({ todos, onToggleCompleted, onDeleteTodo }) => {
/*     const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const initializedTasks = todos.map((todo) => ({
          text: todo.text,
          completed: todo.completed || false,
        }));
        setTasks(initializedTasks);
      }, [todos]);
    
    
    const handleCheckboxChange = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        todos[index].completed = updatedTasks[index].completed;
        setTasks(updatedTasks);
      };
    
    const handleDeleteButtonClick = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }; */
    
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
                            <button onClick={() => onDeleteTodo(todo.id)}>
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
