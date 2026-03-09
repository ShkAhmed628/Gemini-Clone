import React from 'react'
import { assets } from '../../assets/assets'

const MainHeader = () => {
  return (
         <div className='flex justify-between  py-5 sm:px-10 px-2'>
           <h1 className='text-2xl text-[var(--text-med)] '>Gemeni</h1>
           <img className='w-10 rounded-full' src={assets.user_icon} alt="user profile icon" />
        </div>
  )
}

export default MainHeader