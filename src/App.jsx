import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import Main from './Components/Main/Main'

const App = () => {
  return (
    <>
    <div className='main-container flex gap-8 overflow-x-hidden '>
      <Sidebar />
      <Main />
      
    </div>
      
    </>
  )
}

export default App