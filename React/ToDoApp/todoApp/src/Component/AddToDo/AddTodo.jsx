import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){

    const {todos,dispatch}=useContext(TodoContext);

    const [todoData,setTodoData]=useState("");
    return (
        <>
        <input placeholder="Enter your text"
        value={todoData} 
        onChange={(e) => setTodoData(e.target.value)} 
        />
        <button onClick={()=> 
            {
                dispatch({type:"add_todo",payload:{todoData}})
                setTodoData("")   
            }
            }>Submit</button>
        </>
    )
}

export default AddTodo;