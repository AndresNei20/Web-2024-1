
import './App.css'
import { Form, Filters, TodoList, Footer } from './components/index'
import { useTodo } from './hooks/useTodo'

// * We need to add the TodoContextProvider to the components Form, TodoList and look if the other components needs its

function App() {
  const { createTodo,
    filterValue,
    handleFilterChange,
    todos,
    handleFilterTodos,
    toggleTodoCompleted,
    deleteTodo,
    countCompletedTodo,
    filterCompleted, } =
    useTodo()

  return (
    <>
      <h1>Welcome to your To-do List</h1>
      <Form onSubmit={createTodo} />
      <Filters
        currentFilter={filterValue}
        setFilterValue={handleFilterChange}
      />

      <div className="list-div">
        <h2>Your Tasks</h2>
        {todos.length > 0
          ? (
            <TodoList
              todos={handleFilterTodos()}
              onToggleCompleted={toggleTodoCompleted}
              onDeleteTodo={deleteTodo}
            />
          )
          : (
            <p>No tasks created</p>
          )}

        <Footer
          allTodos={todos.length}
          todosCompleted={countCompletedTodo()}
          completedTasks={filterCompleted}
        />
      </div>
    </>
  )
}

export default App
