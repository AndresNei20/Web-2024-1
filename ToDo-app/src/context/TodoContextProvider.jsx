
import { useEffect, useReducer, useState } from "react"
import { saveStorage } from '../helpers/saveStorage'
import { TodoContext } from "./TodoContext"
import { TODO_ACTIONS } from "../const/todoActions"
import { reducerTodos } from "../reducers/todoReducer"

const initTodos = JSON.parse(window.localStorage.getItem('todos')) ?? []

export function TodoContextProvider({ children }) {

    const [todos, dispatchTodo] = useReducer(reducerTodos, initTodos)

    const [filterValue, setFilterValue] = useState('all')
    
    useEffect(() => {
        saveStorage('todos', todos)
    }, [todos])

    //useReducer 
    const createTodo = (todoTitle) => {
        const action = {
            type: TODO_ACTIONS.CREATE_TODO,
            payload: todoTitle
        }
        dispatchTodo(action)
    }
    
    
    const toggleTodoCompleted = (id, completed) => {
        const toggleTodo = {
            type:TODO_ACTIONS.TOGGLE_TODO,
            payload: {
                id,
                completed
            }
        }
        dispatchTodo(toggleTodo)
    }
    
    const deleteTodo = (id) => {
        const deleteItem = {
            type: TODO_ACTIONS.DELETE_TODO,
            payload: id
        }
        console.log('deleted task')
        dispatchTodo(deleteItem)
    }
    
    const filterCompletedTodos = () => {
        const deleteCompleted = {
            type: TODO_ACTIONS.DELETED_COMPLETED_TODO
        }
        console.log('deleted all completed')
        dispatchTodo(deleteCompleted)
    }
    
    //useState
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
                
    const countCompletedTodo = () => {
        return todos.filter((todo) => todo.completed).length
    }

    const countAllTodos = todos.length

    return (
        <TodoContext.Provider value = {{
            createTodo,
            filterValue,
            handleFilterChange,
            todos,
            handleFilterTodos,
            toggleTodoCompleted,
            deleteTodo,
            countCompletedTodo,
            filterCompletedTodos,
            countAllTodos
            }}>
            {children}
        </TodoContext.Provider>   
    )
}
