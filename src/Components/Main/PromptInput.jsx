import React from "react";
import { assets } from "../../assets/assets";


const PromptInput = ({input, setInput , onSent, showresult ,loading}) => {



  return (    

    <div className=" flex  sm:px-25 py-4 ">
      
      <div className=" w-full sm:w-[880px] md:mx-0 mx-2 flex items-center md:justify-between bg-[var(--bg-light)] rounded-full px-6 py-4">

        {/* Input Field */}
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" className="flex-1 bg-transparent outline-none  text-[var(--text-dark)]  placeholder:text-[var(--text-med)] sm:text-lg "/>
        
        {/* Right Icons */}

        <div className="flex items-center gap-2 md:gap-4 ml-4">
          <img onClick={() => alert("Image upload feature is coming soon!")} src={assets.gallery_icon} alt="gallery" className="sm:w-6  w-4 cursor-pointer opacity-70 hover:opacity-100 transition" />
          <img onClick={() => alert("Voice feature is coming soon!")}   src={assets.mic_icon} alt="mic" className="sm:w-6 w-4 cursor-pointer opacity-70 hover:opacity-100 transition"/>
          <img onClick={()=>onSent(input)} src={assets.send_icon} alt="send" className="sm:w-6  w-4 cursor-pointer opacity-70 hover:opacity-100 transition"/>
        </div>
        
      </div>

    </div>
     

  );
};

export default PromptInput;