import { useState } from "react";

function Todo({finished,isFinished,text,deleteTodo,editTodo}){

    const [editText,setEditText]=useState(text);
    const [isEdit,setIsEdit]=useState(false);
    return (
        <>
        <div>
        <input type="checkbox" checked={isFinished} onChange={()=> finished(!isFinished)} />
            {
                isEdit ? <input  onChange={(e)=> setEditText(e.target.value)} value={editText} /> :  <span>{editText}</span>
            }
            <button onClick={()=> {
                setIsEdit(!isEdit)
                editTodo(editText);
            }}>{isEdit ? "Save" : "Edit" }</button>
            <button onClick={deleteTodo}>Delete</button>
        </div>
        </>
    )
}

export default Todo;