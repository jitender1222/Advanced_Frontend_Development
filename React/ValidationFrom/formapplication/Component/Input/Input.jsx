import React, { useContext, useState } from "react";
import { FormContext } from "../../provider/FormContext";
import "../Input/input.css"

const Input = React.forwardRef(({ type, id, label, placeholder},ref) => {  // if we want to use ref prop then we have to use forwardRef
  const [text, setText] = useState("");
  const [isValid,setIsValid]=useState(true);

  const { formInput, setFormInput } = useContext(FormContext);

  return (
    <input
    className={(!isValid) ? "error-input" : ""}
    ref={ref}
      type={type}
      placeholder={placeholder}
      id={id}
      value={text}

      onChange={(e) => {
        setText(e.target.value);
        setFormInput({ ...formInput, [label]: e.target.value }); // if we want to use a label as a variable from a JS object then we must enclose them inside the [] braces
      }}
    />
  );
});

export default Input;  // or we can do React.forwardRef(Input);
