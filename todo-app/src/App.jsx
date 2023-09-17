import { useReducer } from 'react'
import './App.css'
import AddTodo from './components/AddTodo/AddTodo'
import TodoList from './components/TodoList/TodoList'
import TodoContext from './context/TodoContext';
import TodoReducer from './reducers/TodoReducer';


function App() {

  const [todos, dispatch] = useReducer(TodoReducer, []);


return (
<>
<TodoContext.Provider  value={{todos, dispatch}} >
  <AddTodo />
  <TodoList />
  </TodoContext.Provider>
</>
  )
}

export default App
