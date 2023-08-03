import React, { useState } from "react";


function InputBox(props) {
  // Declare a state variable called input
  const [input, setInput] = useState("");

  // Define a function that handles input change
  function handleChange(event) {
    // Set the input state to the value of the input box
    setInput(event.target.value);
  }

  // Define a function that handles button click
  function handleClick() {
    // Call the function prop with the input value
    props.function(input);
  }

  const parseJwt =(input)=>{
    try{
        return JSON.stringify(atob(input.split('.')[1])).replace(/\\/g, '');
    }catch{
        return null;
    }
   
}

return (
    
    <div>
      <textarea type="text" value={input} onChange={handleChange} />
      <br></br>
      <textarea rows={3} value={parseJwt(input)} onChange={handleChange} readOnly/>
    </div>
  );
}

export default InputBox;
