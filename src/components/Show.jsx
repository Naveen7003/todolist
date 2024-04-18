import React from 'react'

const Show = (props) => {
    const tasks = props.tasks;
    const setTasks = props.setTasks;

    const Completetasktoggle = (e, i) =>{
        // e.target.classList.toggle("bg-green-500");
        // e.target.classList.toggle("border");
        // e.target.nextSibling.classList.toggle("line-through");
    
    
    
        const copyTasks = [...tasks]
        copyTasks[i].completed = !tasks[i].completed;
        setTasks(copyTasks)
      }

      const deleteHandler = (i) =>{
        const copyTasks = [...tasks]
        let isValid= false;
        if(!copyTasks[i].completed){
          isValid = confirm("do you really want to delete this task?");
        }
        if(isValid || copyTasks[i].completed){
          copyTasks.splice(i,1)
          setTasks(copyTasks)
        }   
      }

    let taskRender = <h1 className='text-white bg-red-600 w-40 rounded-xl text-center mt-10 ml-20 '> No Task not present</h1>;
    if (tasks.length > 0) {
      taskRender = tasks.map((task,index)=>{
        return (
            <li className='flex bg-white h-9 w-fit rounded-xl gap-4 mt-3 -ml-2 pl-1 pr-1' key={index}>
            <div onClick={(e) => Completetasktoggle(e,index)} className={`${task.completed ? "bg-green-500 border-none": "border"} h-5 w-5 border-orange-500 border-2 mt-2 rounded-full`}></div>
            <p  className={`${ task.completed  && "line-through"} text-xl mt-1`}>{task.title}</p>
            <div className='mt-1'>
            <i className="ri-file-edit-line text-2xl"></i>
            <i onClick={(e)=> deleteHandler(index)} className="ri-delete-bin-2-line text-2xl"></i>
            </div>
            
          </li>  
          )
      })
    };
        
       return <ul className="list-decimal ml-8 mt-4">{taskRender}</ul>
 
}

export default Show