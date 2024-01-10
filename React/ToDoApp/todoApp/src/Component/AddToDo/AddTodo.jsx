import { useContext, useState } from "react";
import TodoContext from "../../context/TodoContext";

function AddTodo(){

    const {todos,setTodos}=useContext(TodoContext);

    const [todoData,setTodoData]=useState("");
    return (
        <>
        <input placeholder="Enter your text"
        value={todoData} 
        onChange={(e) => setTodoData(e.target.value)} 
        />
        <button onClick={()=> 
            {
                let nextId=todos.length+1;
                setTodos([...todos,{id:nextId,text:todoData,isFinished:false}])
                setTodoData("")   
            }
            }>Submit</button>
        </>
    )
}

export default AddTodo;