// note app form handling 


import React from 'react'
import { useState } from 'react'
import { X } from "lucide-react";


const App = () => {

  const [title, setTitle] = useState('')
  const [Details, setDetails] = useState('')
  const [task, settask] = useState([])

  const SubmitHandler = (e) => {
  e.preventDefault();
  
  const copytask = [...task];
  copytask.push({title,Details })
  settask(copytask);


  setDetails('');
  setTitle('');

  }


  
  const deleteNote = (idx)=>
  {
    const copytask = [...task];
    copytask.splice(idx,1);
    settask(copytask);
  }


  return (
    <div className='min-h-screen bg-black w-full  text-white lg:flex justify-between '>

      <form
        onSubmit={(e) => {
          SubmitHandler(e)
        }}
        className='flex flex-col lg:w-1/2 p-10 items-start'
      >

        <h1 className='text-3xl font-bold mb-5 w-full'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Note Heading'
          className='px-5 mb-5 w-full font-medium py-2 border-2 outline-none rounded '
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          placeholder='Wite your note here...'
          name=""
          id=""
          className='px-5 mb-5 w-full py-2 h-32 font-medium border-2 outline-none rounded'
          value={Details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        >
        </textarea>



        <button
         className='bg-white w-full active:scale-95 text-black  py-3 rounded outline-none'
         >
          Add Note
        </button>

      </form>

      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className='text-3xl font-bold mb-5 w-full'>Recent Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function(elem,idx)
           {
            return  <div key={idx} className="h-70 w-65 flex flex-col justify-between   bg-cover relative bg-[url('assets/images/NOTES-bg.png')] text-black overflow-y-clip  pb-8">
                  
            <div>
                <h2 className='text-2xl font-bold mb-3 text-black pt-8 text-center'>{elem.title}</h2>
                <p className='text-md font-medium  mt-2 px-3'>{elem.Details}</p>
            </div>
                 
                <button
                 onClick={()=>
                  {
                   deleteNote(idx)
                  }
                 }
                 className='bg-red-500 text-white p-2 active:scale-95 rounded font-medium w-50 items-center ml-6 '>
                 Delete   
                </button>
                      
               
           </div>
             
           })}  
         
         
        </div>
      </div>

    </div>
  )
}

export default App
