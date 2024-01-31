import "./Form.css"
import Input from "../Input/Input";
import { useContext,useRef } from "react";
import { FormContext } from "../../provider/FormContext";
import passwordValidation from "../Validation/passwordValidation";
import emailValidation from "../Validation/emailValidation";

const Form=()=>{

    const {formInput}=useContext(FormContext);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);

    

    const onhandlesubmit=(e)=>{

        e.preventDefault();  
        handleEmail(); 
        handlePassword();
        
    }
 
    const handleEmail=()=>{
        if(!emailValidation(formInput.email)){
            emailRef.current.shake();
            emailRef.current.setInvalid();
        }
    
    }

    const handlePassword=()=>{
        if(!passwordValidation(formInput.password)){
            passwordRef.current.shake();
            passwordRef.current.setInvalid();
        }
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
            checkonBlurr={handleEmail}
            />
        </div>
        <div className="wrapper input-password-data">
        <Input
        type="password"
        id="password-input"
        label="password"
        placeholder="Enter Password"
        ref={passwordRef} 
        checkonBlurr={handlePassword}
        />
        </div>

        <button className="btn">Submit</button>
        </form>
        </>
    )
}

export default Form;