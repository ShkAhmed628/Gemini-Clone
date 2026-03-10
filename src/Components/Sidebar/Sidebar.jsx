import React, { useState, useContext } from 'react'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'


const Sidebar = () => {

  const [extended, setExtended] = useState(false)


 const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

  return (
    <div className={`   hidden md:flex py-7  flex-col justify-between bg-[var(--bg-light)]  ${extended ? 'w-[17%] px-5' : 'w-[5%] px-3'} h-screen transition-all duration-300`} >

      <div className=" overflow-x-hidden overflow-x-visible flex gap-6 flex-col ">

        <img onClick={() => setExtended(prev => !prev)} src={assets.menu_icon} alt="menu" className="w-5 cursor-pointer" />
       
        <div onClick={newChat} className={`flex ${extended ? 'items-center justify-center w-32' : 'items-center justify-center w-full'} gap-4 bg-[var(--bg-gray)] text-sm p-[7px] rounded-md cursor-pointer`}>
             <img src={assets.plus_icon} alt="plus_icon" className="w-4" />
             {extended && <p>New Chat</p>}
        </div>

        {/* Recent Prompts */}
        {extended && (
          <div>
            <p className="font-medium">Recent</p>
             
             <div className='recent-scroll h-[47vh] mb-8 mt-2 overflow-y-scroll '> 
                   {prevPrompt.map((item, index) => (
                <div key={index} className=" recent flex gap-1 mt-1 hover:bg-[var(--bg-gray)] p-1 rounded-md cursor-pointer items-center " onClick={() => setRecentPrompt(item)}>
                  <img src={assets.message_icon} alt="history_icon" className="w-4 h-4"/>
                  <p className="whitespace-nowrap">{item.slice(0,18)}...</p>
                </div>
              ))}
             </div>
             

           </div>
        )}


      </div>

      {/* Sidebar Bottom */}
      <div className="sidebar_bottom">

        <div className="flex gap-2 items-center mb-4 cursor-pointer">
          <img src={assets.question_icon} alt="question_icon" className="w-5" />
          {extended && <p>Help</p>}
        </div>

        <div className="flex gap-2 items-center mb-4 cursor-pointer">
          <img src={assets.history_icon} alt="history_icon" className="w-5" />
          {extended && <p>History</p>}
        </div>

        <div className="flex gap-2 items-center mb-4 cursor-pointer">
          <img src={assets.setting_icon} alt="setting_icon" className="w-5" />
          {extended && <p>Settings</p>}
        </div>

      </div>

    </div>

  )
}

export default Sidebar
