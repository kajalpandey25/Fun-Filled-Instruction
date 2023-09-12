import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){
 const { todos, setTodos } = useContext(TodoContext);

    const [todoText, setTodoText]= useState('');

    function addTodo(todoText){
        let nextId = todos.length + 1;
          setTodos([...todos, {id: nextId,  text: todoText, isFinished: false}]);
    }
    return(
        <>
        <input placeholder="Add your next todo....." 
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        />
        
        <button onClick={()=>{
          addTodo(todoText)
           setTodoText('');
        }}>Submit</button>
        </>
    )
}

export default AddTodo;