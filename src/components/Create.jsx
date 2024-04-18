import React from 'react';
import {useState} from 'react';
const Create = (props) => {
    const tasks = props.tasks;
    const setTasks = props.setTasks;

  const [title, setTitle] = useState("");


    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = { title, completed: false };
        console.log(newTask);
    
        setTasks([...tasks, newTask]);
    
        setTitle("");
      }
  return (
    <div><form onSubmit={submitHandler}>
    <input 
      name="input" 
      placeholder='Write here.........' 
      className='ml-6 mt-3 h-8 w-72' 
      onChange={(e) => setTitle(e.target.value)} 
      value={title}
    />
    <button className='h-8 w-20 rounded-md bg-slate-500 text-white ml-4' type="submit">Add</button>
  </form></div>
  )
}

export default Create