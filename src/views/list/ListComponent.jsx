import data from "./data.json";
import React, { useState } from 'react';
import ToDoList from "./ToDoList";
import ToDoForm from './ToDoForm';

 
const ListComponent= () =>{

  
  const [ toDoList, setToDoList ] = useState(data);

  const handleToggle = (id) => {
    let mapped = toDoList.map(task => {
      return task.id === Number(id) ? { ...task, complete: !task.complete } : { ...task};
    });
    setToDoList(mapped);
  }

  const handleFilter = () => {
    let filtered = toDoList.filter(task => {
      return !task.complete;
    });
    setToDoList(filtered);
  }

  const addTask = (userInput ) => {
    let copy = [...toDoList];
    copy = [...copy, { id: toDoList.length + 1, task: userInput, complete: false }];
    setToDoList(copy);
  }

  return (
<>

<div className="flex flex-col w-full lg:flex-row">
    <div className="grid flex-grow place-items-center">


    <div className="flex flex-col w-full lg:flex-row mt-20 mb-14">
    <div className="grid flex-grow place-items-center">
            <h1 class="text-3xl">My Packing List 🧳</h1>
            
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl image-full mb-10">
<div className="card-body ">
<div className="flex flex-col w-full lg:flex-row">
    <div className="grid flex-grow place-items-center">

    <div className="App">
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter}/>
      

</div>
<div className="flex flex-col w-full lg:flex-row mt-8">
    <div className="grid flex-grow place-items-center">
<ToDoForm addTask={addTask}/>
</div>
</div>
                </div>
            </div>
            </div>
    </div>
    <div className="flex flex-col w-full lg:flex-row mb-10">
    <div className="grid flex-grow place-items-center">
<button style={{margin: '20px'}} onClick={handleFilter}className="btn btn-active btn-ghost">Clear Completed</button>
    </div>
    </div>            

</div>
</div>
                </>
  );
}

export default ListComponent;