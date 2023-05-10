import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({toDoList, handleToggle, handleFilter}) => {
    return (
<div>


             {/* head */}
                {toDoList.map(todo => {
                return (
                    <>
<div className="flex flex-col w-full lg:flex-row ">
<div className="grid flex-grow place-items-center mt-3 mb-5">
                            <div className="overflow-x-auto">
                            <table className="table ">
                            <tbody>
                            <tr className="hover">
                            
                            <td>
                            <div className="flex flex-col w-full lg:flex-row  ">
    <div className="grid flex-grow place-items-center">
                            <ToDo todo={todo} handleToggle={handleToggle} handleFilter={handleFilter}/>
                            </div>
                            </div>
                            </td>
                        </tr>
                        </tbody>
                        </table>
                        </div>
                  </div>
            </div>
                  
                    </>
                )
            })}
        


</div>
        
    );
};

export default ToDoList;