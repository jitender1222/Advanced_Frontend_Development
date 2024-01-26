import { useContext, useState } from "react";
import { FormContext } from "../../provider/FormContext";

const Input = ({ type, id, label, placeholder }) => {
  const [text, setText] = useState("");

  const { formInput, setFormInput } = useContext(FormContext);
  return (
    <input
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
};

export default Input;
