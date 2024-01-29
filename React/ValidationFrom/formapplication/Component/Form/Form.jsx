import "./Form.css"
import Input from "../Input/Input";
import { useContext, useRef } from "react";
import { FormContext } from "../../provider/FormContext";

const Form=()=>{

    const {formInput}=useContext(FormContext);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    const onhandlesubmit=(e)=>{
        console.log(formInput);
        e.preventDefault();
        emailRef.current.focus();
    }
    
    return (
        <>
        <h1>Form</h1>
        <form onSubmit={onhandlesubmit} noValidate>
        <div className="wrapper input-email-data">
            <Input 
            type="email"
            id="email-input" 
            label="email"
            placeholder="Enter Email"
            ref={emailRef}   // we can't pass it as a ref={emailRef} because it a user component and it is a defined prop for react this is a reserved keyword for react
            />
        </div>
        <div className="wrapper input-password-data">
        <Input
        type="password"
        id="password-input"
        label="password"
        placeholder="Enter Password"
        inputRef={passwordRef} 
        />
        </div>

        <button className="btn">Submit</button>
        </form>
        </>
    )
}

export default Form;