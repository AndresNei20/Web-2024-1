import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react';
import './List.css'

export const List = ({ todos }) => {
    const [tasks, setTasks] = useState([]);

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
  };
    
  console.log(todos)

    return (
        <div>
            <h2>Your Tasks</h2>
            <ul>
                {
                    todos.map((todo, index) => (
                        <div className='task-container'
                            key={index}>
                            <li>
                                <div className='task-label'>
                                    <input
                                        type="checkbox"
                                        checked={todo.completed || false}
                                        onChange={() => handleCheckboxChange(index)}
                                    />
                                    
                                    {todo.text}
                                </div>
                            </li>
                            <button onClick={() => handleDeleteButtonClick(index)}>
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
