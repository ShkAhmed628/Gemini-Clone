import React from 'react'
import { assets } from '../../assets/assets'

const Welcome = () => {
  return (
     <div className='sm:px-25 py-9 md:text-[56px] text-[33px] px-2 font-medium'>
          <p className='text'>
            <span className="bg-gradient-to-r from-[#4b90ff] to-[#ff5546] bg-clip-text text-transparent">
              Ahmed , Gemini.
            </span>
          </p>
          <p className=' text-[var(--text-light)] '>How can I help you today?</p>
        </div>
  )
}

export default Welcome