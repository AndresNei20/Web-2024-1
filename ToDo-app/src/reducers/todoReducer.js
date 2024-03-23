import { TODO_ACTIONS } from "../const/todoActions"

// * state = todos, we use name:state to be more generic and can be re-use in a future 
export const reducerTodos = (state, action) => {
    if (action.type === TODO_ACTIONS.CREATE_TODO) {
        const newTodo = {
          id: crypto.randomUUID(),
          title: action.payload,
          completed: false,
        };
        return [...state, newTodo];
      } else if (action.type === TODO_ACTIONS.TOGGLE_TODO) {
        return state.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: action.payload.completed }
            : todo,
        );
      } else if (action.type === TODO_ACTIONS.DELETE_TODO) {
        return state.filter((todo) => todo.id !== action.payload);
      }
      if (action.type === TODO_ACTIONS.DELETED_COMPLETED_TODO) {
        return state.filter((todo) => !todo.completed);
      } else {
        return state;
    }
}