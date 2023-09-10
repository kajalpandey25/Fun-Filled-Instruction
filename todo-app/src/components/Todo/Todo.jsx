import { useState } from "react";

function Todo({editTodo, deleteTodo, text, isFinished }){


   const [isEditing, setIsEditing] = useState(false);
   const[todoText, setTodoText] = useState(text);
 return(
    <div>
    <input type="checkbox" checked={isFinished} />
     {isEditing? <input onChange={(e)=> setTodoText(e.target.value)} />: <span>{ todoText}</span> }
    <button onClick={() => editTodo()}> {isEditing? 'Save' : 'Edit'}</button>
    <button onClick={deleteTodo}>Delete</button>
    </div>
 )
}

export default Todo;