import { useEffect, useState } from 'react'
import './App.css'
import {Form, Filters, List, Footer} from './components/index'

const initTodos = JSON.parse(window.localStorage.getItem('todos')) ?? []

function App() {
  const [todos, setTodos]= useState(initTodos);

  const [filterValue, setFilterValue] = useState('all')

  useEffect(()=>{
    window.localStorage.setItem('todos', JSON.stringify(todos))
  },[todos])

//Create todo
  const createTodo = (todoTitle) => {
    const newTodo = {
      id:crypto.randomUUID(),
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
    switch(filterValue){
      case 'completed':
        return todos.filter(todo => todo.completed === true);
      case 'pending':
        return todos.filter(todo => todo.completed === false);
      default:
        return todos
    }
  }

  const toggleTodoCompleted = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  const countCompletedTodo = ()=>{
    return todos.filter(todo=>todo.completed).length
  }

  return (
    <>
      <h1>Welcome to your To-do List</h1>
      <Form onSubmit={createTodo}/>
      <Filters currentFilter={filterValue} 
               setFilterValue={handleFilterChange}/>
      
      <div className='list-div'>
      <h2>Your Tasks</h2>
      {todos.length > 0 
      ? <List todos={handleFilterTodos()}
            onToggleCompleted={toggleTodoCompleted}
            onDeleteTodo={deleteTodo}/>
      : (<p>No tasks created</p>)
      }

      <Footer allTodos={todos.length} todosCompleted={countCompletedTodo()}/>
      </div>
      
    </>
  )
}

export default App
