import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    }
    return (
<div className="flex flex-col w-full lg:flex-row ">
<div className="grid flex-grow place-items-center mt-3 mb-5">
       <div><form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter item" className="input input-bordered input-secondary pb-2"/>
            <button className="btn btn-secondary ml-2">Add</button>
        </form></div>

</div>
</div>
        
     
    );
};

export default ToDoForm;