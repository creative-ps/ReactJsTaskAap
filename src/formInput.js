import React from "react";

const Input = ({type,name,inputVal,handleInput})=>{
    return (
        <input 
            type={type} 
            name={name} 
            placeholder="Add task"
            onChange={handleInput} 
            value={inputVal}
            className="form-control"
        />
    );
}

export default Input;