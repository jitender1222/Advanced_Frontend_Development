import { useState } from "react";

const AddTweet=({onHandle})=>{

    const [text,setText]=useState();

    return (
        <>
        <input placeholder="Enter text" 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        />
        <button onClick={()=> {
            setText("")
            onHandle(text)
            }}>Tweet !!</button>
        </>
    )
}

export default AddTweet;