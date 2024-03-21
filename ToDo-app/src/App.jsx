
import './App.css'
import { Form, Filters, TodoList, Footer } from './components/index'
import { TodoContextProvider } from './context/TodoContextProvider'
import { useTodo } from './hooks/useTodo'

// * We need to add the TodoContextProvider to the components Form, TodoList and look if the other components needs its

function App() {
/*   const { createTodo,
    filterValue,
    handleFilterChange,
    todos,
    handleFilterTodos,
    toggleTodoCompleted,
    deleteTodo,
    countCompletedTodo,
    filterCompleted, } =
    useTodo() */

    const { todos } = useTodo()

  return (
    <>
      <h1>Welcome to your To-do List</h1>
    
      <Form />
      <Filters/>
      <div className="list-div">
        <h2>Your Tasks</h2>
        {todos.length > 0
          ? (<TodoList/>)
          : (<p>No tasks created</p>)}
        <Footer/>
      </div>
      <p className='names'> © Designed by Paola Velasquez & Andres Neira</p>
    </>
  )
}

export default App
