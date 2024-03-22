import { TODO_ACTIONS } from "../const/todoActions"

export const reducerTodos = (todos, action) => {
    if (action.type === TODO_ACTIONS.CREATE_TODO) {
        const newTodo = {
            id: crypto.randomUUID(),
            title: action.payload,
            completed: false
        }
        return [...todos, newTodo]
    } else {
        
    }
}