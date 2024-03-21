
import { useEffect, useState } from "react"
import { saveStorage } from '../helpers/saveStorage'
import { TaskContext } from "./TodoContext"

const initTodos = JSON.parse(window.localStorage.getItem('todos')) ?? []

export function TodoContextProvider({ children }) {

    const [todos, setTodos] = useState(initTodos)
    const [filterValue, setFilterValue] = useState('all')
    
    useEffect(() => {
        saveStorage('todos', todos)
    }, [todos])
    
    // Create todo
    const createTodo = (todoTitle) => {
        const newTodo = {
            id: crypto.randomUUID(),
            title: todoTitle,
            completed: false
        }
        const todosTemp = [...todos, newTodo]
        
        setTodos(todosTemp)
    }
    
    const handleFilterChange = (newFilter) => {
        setFilterValue(newFilter)
    }
    
    const handleFilterTodos = () => {
        switch (filterValue) {
            case 'completed':
                return todos.filter((todo) => todo.completed === true)
                case 'pending':
                    return todos.filter((todo) => todo.completed === false)
                    default:
                        return todos
                    }
                }
                
                const toggleTodoCompleted = (id) => {
                    setTodos(
                        todos.map((todo) =>
                        todo.id === id ? { ...todo, completed: !todo.completed } : todo
                        )
                        )
                    }
                    
                    const deleteTodo = (id) => {
                        setTodos(todos.filter((todo) => todo.id !== id))
                    }
                    
                    const countCompletedTodo = () => {
                        return todos.filter((todo) => todo.completed).length
                    }
                    
                    const filterCompleted = () => {
                        const completed = todos.filter((todo) => !todo.completed)
                        setTodos(completed)
                    }

                    return (
                        <TaskContext.Provider value = {{
                            createTodo,
                            filterValue,
                            handleFilterChange,
                            todos,
                            handleFilterTodos,
                            toggleTodoCompleted,
                            deleteTodo,
                            countCompletedTodo,
                            filterCompleted,
                        }}>
                            {children}
                        </TaskContext.Provider>
                      
                        
                    )
}
