import {showToast} from "../utils/showToast";
import "react-toastify/dist/ReactToastify.css";
import "./Input.css"
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form"


const Input=({addItem})=>{
    const { register, handleSubmit,formState: { errors }, } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        addItem(data.item);
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