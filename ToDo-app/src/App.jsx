/* import { useState } from 'react' */
import { useState } from 'react'
import './App.css'
import {Form, Filters, List, Footer} from './components/index'

function App() {
  const [todos, setTodos]= useState([]);

  const handleAddTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  return (
    <>
      <h1>Welcome to your To-do List</h1>
      <Form addTodo={handleAddTodo}/>
      <Filters/>
      <List todos={todos}/>
      <Footer/>
    </>
  )
}

export default App
