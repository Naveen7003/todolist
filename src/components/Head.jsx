import React from 'react'

const Head = (props) => {
    const tasks = props.tasks
  return (
    <div>
        <div> <h1 className=' text-center mt-2 text-3xl text-white underline'>To Do List</h1>
        <div className='h-12 w-12 rounded-full bg-slate-500 ml-44 text-white flex justify-center items-center mt-2'>
          <h1 className='text-xl'>{tasks.filter((t) => t.completed === true).length}/{tasks.length}</h1>
        </div></div>
     </div>
  )
}

export default Head