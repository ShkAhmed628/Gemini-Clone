import React from 'react'
import { assets } from '../../assets/assets'
import Card from './Card'
import PromptInput from './PromptInput'
import Welcome from './Welcome'
import MainHeader from './MainHeader' 
import Result from './Result'
import Footer from './footer'
import { useContext } from 'react'
import { Context } from '../../Context/Context'

const Main = () => {

  const {onSent, recentPrompt , showResult, loading, resultData , setInput , input} = useContext(Context)
  
  return (
<>

    <div className='w-full '>
        <MainHeader/>

       {!showResult 
        ?<>
         
          <Welcome/>
          <Card/> 
          
        </>
       : <Result recentPrompt={recentPrompt} resultData={resultData} loading={loading}/>} 
             
        
        <PromptInput input={input} setInput={setInput} onSent={onSent}/>

        <Footer/>
        
    </div>

 </>   
  )
}

export default Main