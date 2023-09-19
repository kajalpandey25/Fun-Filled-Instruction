import { useState } from "react";

import { useDispatch } from "react-redux";

function AddTodo(){
 const dispatch = useDispatch();

    const [todoText, setTodoText]= useState('');

    function addTodo(todoText){
        dispatch({type: 'add_todo', payload: {todoText}})
    }
    return(
        <>
        <input placeholder="Add your next todo....." 
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
        style={{
            padding: '10px',
            fontSize: '16px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            marginRight: '10px'
          }}
        />
        
        <button onClick={()=>{
          addTodo(todoText)
           setTodoText('');
        }}
        style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
        Submit
        </button>
        </>
    )
}

export default AddTodo;