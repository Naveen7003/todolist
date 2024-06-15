import React, { useState } from 'react';
import Head from "./components/Head";
import Create from "./components/Create";
import Show from "./components/Show"
import Host from "./components/Host"
import Upper from "./components/Upper";
import Input from "./components/Input";
const App = () => {

  const [tasks, setTasks] = useState([]);
 
  return (
    <div className='h-screen w-screen  flex items-center justify-center'>
      <div className='h-[35vw] w-[28vw]  bg-slate-400 rounded-3xl'>
      <Head tasks={tasks} />
      <Create tasks={tasks} setTasks={setTasks}/>
      <Show tasks={tasks} setTasks={setTasks}/>
      <Host info="This is real info">
        {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur eius ullam nisi porro exercitationem. Ullam, doloremque ad odio dicta quae sequi deserunt fugiat quis earum nam dolore nesciunt sed natus.</p> */}
      </Host>
      
      </div>
    </div>
  )
}

export default App;
