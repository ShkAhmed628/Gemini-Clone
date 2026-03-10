import React from 'react'
import { assets } from '../../assets/assets'


const Result = ({recentPrompt , resultData , loading }) => {
  return (
    <div className='sm:px-20 overflow-y-scroll h-[70vh] flex flex-col gap-6 py-6'>
       <div className='flex sm:px-0 px-4  flex-row text-center items-center gap-2'>
            <img className='w-10 rounded-full' src={assets.user_icon} alt="user profile icon" />
           <p>{recentPrompt}</p>
       </div>

       <div className='flex gap-1 sm:gap:3 ' >
           <img className='  w-6 h-6 sm:w-10 sm:h-10 ' src={assets.gemini_icon} alt="" />
           {loading
           ? <div className="loader">
               <hr />
               <hr />
               <hr />
             </div> : <div className='text-[10px] sm:text-[17px] font-normal leading-relaxed' dangerouslySetInnerHTML={{__html:resultData}}/> }
       </div>



    </div>
  )
}

export default Result