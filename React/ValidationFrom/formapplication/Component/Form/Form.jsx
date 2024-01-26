import {  useRef, useState } from "react"
import "./Form.css"
import emailValidation from "../Validation/emailValidation";
import passwordValidation from "../Validation/passwordValidation";

const Form=()=>{

    const emailRef=useRef(null);
    const PassRef=useRef(null);
    
    // useEffect(()=>{
    //     console.log("email",email.current);
    // })

    const [formValue,setFromValue]=useState({
        email:"",
        password:""
    })

    const validateEmail=()=>{
        const email=formValue.email;
        if(!emailValidation(email)){
            emailRef.current.focus();
            console.log("email does not conatin required parameters");
        }   
    }

    const validatePassword=()=>{
        const password=formValue.password;
        if(!passwordValidation(password)){
            PassRef.current.focus();
            console.log("password does not conatin required parameters");
        }
    }


    function onhandlesubmit(e){
        e.preventDefault();
       validateEmail();
       validatePassword();
        console.log(formValue)
    }

    // function onSubmitForm(){
    //     console.log("heklo",formValue)
    // }
    return (
        <>
        <h1>Form</h1>
        <form onSubmit={onhandlesubmit}>
        <div className="wrapper input-email-data">
            <input type="text" 
            placeholder="Enter Email" 
            value={formValue.email}
            ref={emailRef} 
            onChange={(e)=>setFromValue({...formValue,email:e.target.value})}
            />
        </div>
        <div className="wrapper input-password-data">
        <input type="password" 
        placeholder="Enter Password" 
        value={formValue.password}
        ref={PassRef} 
        onChange={(e)=>setFromValue({...formValue,password:e.target.value})}
        />
        </div>

        <button className="btn">Submit</button>
        </form>
        </>
    )
}

export default Form;