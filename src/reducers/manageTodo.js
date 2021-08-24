import uuid from "uuid"; // generate random ID, less orone to err in virtual dom


export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action)
  switch (action.type) {

    // Add uuid, now storing an array of object
    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: action.payload.text,
      };
      return { todos: state.todos.concat(todo) };

      
      // Store an Array of string
      // return { todos: state.todos.concat(action.payload.text) };

    case "DELETE_TODO":
      
      return { todos: state.todos.filter((todo) => todo.id !== action.payload)}
  

    default:
      return state;
  }
}
