import { useState } from "react";

function AddTodo({setTodos}){

    const [todoData,setTodoData]=useState("");
    return (
        <>
        <input placeholder="Enter your text"
        value={todoData} 
        onChange={(e) => setTodoData(e.target.value)} 
        />
        <button onClick={()=> 
            {
                setTodos(todoData);
                setTodoData("")   
            }
            }>Submit</button>
        </>
    )
}

export default AddTodo;