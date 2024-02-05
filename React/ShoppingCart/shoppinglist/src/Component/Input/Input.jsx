import {showToast} from "../utils/showToast";
import "react-toastify/dist/ReactToastify.css";
import "./Input.css"
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form"
import { useContext } from "react";
import { ShoppingDispatchContext } from "../providers/context";


const Input=()=>{
    const { register, handleSubmit,formState: { errors }, } = useForm();
    const dispatch=useContext(ShoppingDispatchContext);

    const onSubmit = (data) => {
        console.log(data);
        dispatch({
            type: "add_item",
            item: data.item
        });
        showToast("Successfuly Added")
    }

    return (
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-items">
        <input className="input" 
        placeholder="Enter shopping Items"  
        {...register("item",{ required: true, minLength: 3 })} 
        />

        <button className="cart-btn">Add To Cart</button>
        <ToastContainer />
        </div>
        </form>
        {errors.item && errors.item.type == "required" && <p>Item is Missing</p>}
        {errors.item && errors.item.type == "minLength" && <p>Item cannot be less than 2</p>}
        </>
    )   
}

export default Input;