import { useState } from 'react'
import './App.css'
import {Form, Filters, List, Footer} from './components/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to your To-do List</h1>
      <Form/>
      <Filters/>
      <List/>
      <Footer/>
    </>
  )
}

export default App
