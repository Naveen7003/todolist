import React, { useState } from 'react';

const App = () => {

  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { title, completed: false };
    console.log(newTask);

    setTasks([...tasks, newTask]);

    setTitle("");
  }

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
    taskRender = (
      
      <ul className="list-decimal ml-8 mt-4">
        {tasks.map((task, index) => (
          <li className='flex bg-white h-9 w-fit rounded-xl gap-4 mt-3 -ml-2 pl-1 pr-1' key={index}>
            <div onClick={(e) => Completetasktoggle(e,index)} className={`${task.completed ? "bg-green-500 border-none": "border"} h-5 w-5 border-orange-500 border-2 mt-2 rounded-full`}></div>
            <p c className={`${ task.completed  && "line-through"} text-xl mt-1`}>{task.title}</p>
            <div className='mt-1'>
            <i className="ri-file-edit-line text-2xl"></i>
            <i onClick={(e)=> deleteHandler(index)} className="ri-delete-bin-2-line text-2xl"></i>
            </div>
            
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className='h-screen w-screen  flex items-center justify-center'>
      <div className='h-[35vw] w-[28vw]  bg-slate-400 rounded-3xl'>
        <h1 className=' text-center mt-2 text-3xl text-white underline'>To Do List</h1>
        <div className='h-12 w-12 rounded-full bg-slate-500 ml-44 text-white flex justify-center items-center mt-2'>
          <h1 className='text-xl'>{tasks.filter((t) => t.completed === true).length}/{tasks.length}</h1>
        </div>
        <form onSubmit={submitHandler}>
          <input 
            name="input" 
            placeholder='Write here.........' 
            className='ml-6 mt-3 h-8 w-72' 
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
          />
          <button className='h-8 w-20 rounded-md bg-slate-500 text-white ml-4' type="submit">Add</button>
          {taskRender}
        </form>
      </div>
    </div>
  )
}

export default App;
