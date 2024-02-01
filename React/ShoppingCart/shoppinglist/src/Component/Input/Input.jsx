import {showToast} from "../utils/showToast";
import "react-toastify/dist/ReactToastify.css";
import "./Input.css"
import { ToastContainer } from "react-toastify";
import { useState } from "react";

const Input=({addItem})=>{

    const [item,setItem]=useState("");

    return (
        <>
        <div className="input-items">
        <input className="input" value={item} placeholder="Enter shopping Items"  onChange={(e)=>setItem(e.target.value)} />
        <button className="cart-btn"
        
        onClick={()=> {
            addItem(item);
            setItem(" ");
            showToast("Successfuly Added")
            }} >Add To Cart
        </button>
        <ToastContainer />
        </div>
       
        </>
    )
}

export default Input;