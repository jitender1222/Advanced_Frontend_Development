import "./Form.css"
import Input from "../Input/Input";
import { useContext } from "react";
import { FormContext } from "../../provider/FormContext";

const Form=()=>{

    const {formInput}=useContext(FormContext);

    const onhandlesubmit=(e)=>{
        console.log(formInput);
        e.preventDefault();
    }
    
    return (
        <>
        <h1>Form</h1>
        <form onSubmit={onhandlesubmit}>
        <div className="wrapper input-email-data">
            <Input 
            type="text"
            id="email-input" 
            label="email"
            placeholder="Enter Email"
            />
        </div>
        <div className="wrapper input-password-data">
        <Input
        type="password"
        id="password-input"
        label="password"
        placeholder="Enter Password" 
        />
        </div>

        <button className="btn">Submit</button>
        </form>
        </>
    )
}

export default Form;