import React from 'react'
import { assets } from '../../assets/assets'

const Card = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:gap-4  gap-2 py-0 items-center  justify-center sm:justify-start sm:px-25">

          <div className=" bg-[var(--bg-light)] rounded-2xl p-5  sm:w-52 sm:h-44 w-83 h-40 flex flex-col justify-between cursor-pointer hover:bg-[var(--hover-gray)] transition-colors duration-200">
            <p className="text-[var(--text-dark)] text-[15px] leading-snug">
              Suggest beautiful places to see on an upcoming road trip
            </p>
            <div className="flex justify-end">
              <img src={assets.compass_icon} alt="compass" className="w-7 bg-[var(--white)] p-1  rounded-full" />
            </div>
          </div>
          <div className=" bg-[var(--bg-light)] rounded-2xl p-5  sm:w-52 sm:h-44 w-83  h-40 flex flex-col justify-between cursor-pointer hover:bg-[var(--hover-gray)] transition-colors duration-200"> 
            <p className="text-[var(--text-dark)] text-[15px] leading-snug">
              Briefly summarize this concept: urban planning
            </p>
            <div className="flex justify-end">
              <img src={assets.bulb_icon} alt="idea" className="w-7 bg-[var(--white)] p-1  rounded-full" />
            </div>
          </div>

          <div className="bg-[var(--bg-light)] rounded-2xl p-5  sm:w-52 sm:h-44 w-83  h-40 flex flex-col justify-between cursor-pointer hover:bg-[var(--hover-gray)] transition-colors duration-200">
            <p className="text-[var(--text-med)] text-[15px] leading-snug">
              Brainstorm team bonding activities for our work retreat
            </p>
            <div className="flex justify-end">
              <img src={assets.message_icon} alt="chat" className="w-7 bg-[var(--white)] p-1  rounded-full" />
            </div>
          </div>

           <div className=" bg-[var(--bg-light)] rounded-2xl p-5  sm:w-52 sm:h-44 w-83  h-40 flex flex-col justify-between cursor-pointer hover:bg-[var(--hover-gray)] transition-colors duration-200">
            <p className="text-[var(--text-med)] text-[15px] leading-snug">
              Tell me about React js and React native
            </p>
            <div className="flex justify-end">
              <img src={assets.code_icon} alt="code" className="w-7 bg-[var(--white)] p-1  rounded-full" />
            </div>
          </div>

        </div>
  )
}

export default Card