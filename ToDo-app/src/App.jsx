import { useState } from 'react'
import './App.css'
import { Filters } from './components/Filters/Filters'
import { Footer } from './components/Footer/Footer'
import { Form } from './components/Form/Form'
import { List } from './components/List/List'

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
