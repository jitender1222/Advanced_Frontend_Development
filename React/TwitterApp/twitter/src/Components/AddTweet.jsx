import { useState } from "react";

const AddTweet=()=>{

    const [text,setText]=useState();

    return (
        <>
        <input placeholder="Enter text" 
        value={text}
        onChange={()=> setText()}
        />
        <button onClick={()=> setText("")}>Tweet !!</button>
        </>
    )
}

export default AddTweet;