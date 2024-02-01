import {showToast} from "../utils/showToast";
import "react-toastify/dist/ReactToastify.css";
import "./Input.css"
import { ToastContainer } from "react-toastify";

const Input=()=>{

    return (
        <>
        <div className="input-items">
        <input className="input" placeholder="Enter shopping Items" />
        <button className="cart-btn" onClick={()=> showToast("Successfuly Added")} >Add To Cart</button>
        <ToastContainer />
        </div>
       
        </>
    )
}

export default Input;