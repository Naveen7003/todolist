import React, { useState } from 'react';
import Head from "./components/Head";
import Create from "./components/Create";
import Show from "./components/Show"
const App = () => {

  const [tasks, setTasks] = useState([]);
 
  return (
    <div className='h-screen w-screen  flex items-center justify-center'>
      <div className='h-[35vw] w-[28vw]  bg-slate-400 rounded-3xl'>
      <Head tasks={tasks} />
      <Create tasks={tasks} setTasks={setTasks}/>
      <Show tasks={tasks} setTasks={setTasks}/>
      </div>
    </div>
  )
}

export default App;
