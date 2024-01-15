import { useState } from "react"
import "./Form.css"
import emailValidation from "../Validation/emailValidation";
import passwordValidation from "../Validation/passwordValidation";

const Form=()=>{

    const [formValue,setFromValue]=useState({
        email:"",
        password:""
    })

    const validateEmail=()=>{
        const email=formValue.email;
        if(!emailValidation(email)){
            console.log("email does not conatin required parameters");
        }
    }

    const validatePassword=()=>{
        const password=formValue.password;
        if(!passwordValidation(password)){
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
            <input type="email" 
            placeholder="Enter Email" 
            value={formValue.email} 
            onChange={(e)=>setFromValue({...formValue,email:e.target.value})}
            />
        </div>
        <div className="wrapper input-password-data">
        <input type="password" 
        placeholder="Enter Password" 
        value={formValue.password}
        onChange={(e)=>setFromValue({...formValue,password:e.target.value})}
        />
        </div>

        <button className="btn">Submit</button>
        </form>
        </>
    )
}

export default Form;