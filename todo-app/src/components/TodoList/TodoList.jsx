import Todo from "../Todo/Todo";

function TodoList({ todos, setTodos }){

  function onDeleteTodo(id){
    const newTodoList = todos.filter(todo => todo.id != id);
    setTodos(newTodoList);

  }

  function onEditTodo(id, newTodo){
    
  }
return(
   todos && todos.map(
        (todo) => <Todo
          key={todo.id} 
          text={todo.text}
           isFinished={todo.isFinished} 
           editTodo={(newTodo) => onDeleteTodo(todo.id, newTodo)}
           deleteTodo={() => onDeleteTodo(todo.id)}
 />)
);
}

export default TodoList;