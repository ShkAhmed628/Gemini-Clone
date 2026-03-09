import { createContext, useState } from "react";
import { runChat } from "../Config/gemini.js";
import { marked } from "marked";

export const Context = createContext();

const ContextProvider = (props) => {

  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setprevPrompt] = useState([]);
  const [showResult, setshowResults] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultData, setresultData] = useState("");

  const onSent = async (prompt) => {

    setresultData("");
    setloading(true);
    setshowResults(true);
    setRecentPrompt(input);
    setprevPrompt((prev) => [...prev, input]);
    const response = await runChat(prompt);

    // Convert markdown to HTML
    const formattedResponse = marked.parse(response);

    setloading(false);

    // Typing Effect of the response

    let index = 0;

    const typingInterval = setInterval(() => {

      setresultData((prev) => prev + formattedResponse.charAt(index));

      index++;

      if (index >= formattedResponse.length) {
        clearInterval(typingInterval);
      }

    }, 10); 

    setInput("");
    

  };

  
  
const newChat = () => {
  setloading(false);
  setshowResults(false);
  setRecentPrompt("");
  setresultData("");
  setInput("");
};



 const contextValue = {
  prevPrompt,
  setprevPrompt,
  onSent,
  newChat,
  setRecentPrompt,
  recentPrompt,
  showResult,
  loading,
  resultData,
  input,
  setInput,
};
  return (
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  );
};

export default ContextProvider;