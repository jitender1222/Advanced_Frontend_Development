import "../Css/Tweet.css"
import { useState } from "react";

const AddTweet=({onHandle})=>{

    const [text,setText]=useState();

    return (
        <>
        <input className="addTweetInput" placeholder="Enter text" 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        />
        <button className="addTweet" onClick={()=> {
            setText("")
            onHandle(text)
            }}>Tweet !!</button>
        </>
    )
}

export default AddTweet;