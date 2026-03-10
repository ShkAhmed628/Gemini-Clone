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

  // SEND PROMPT
  const onSent = async (prompt) => {

    setresultData("");
    setloading(true);
    setshowResults(true);

    setRecentPrompt(prompt);
    setprevPrompt((prev) => [...prev, prompt]);

    const response = await runChat(prompt);

    const formattedResponse = marked.parse(response);

    setloading(false);

    // Typing Effect
    let index = 0;

    const typingInterval = setInterval(() => {

      setresultData((prev) => prev + formattedResponse.slice(index, index + 3));

      index += 3;

      if (index >= formattedResponse.length) {
        clearInterval(typingInterval);
      }

    }, 25);

    setInput("");
  };


  // LOAD OLD PROMPT
  const loadPrompt = async (prompt) => {

    setInput(prompt);
    setRecentPrompt(prompt);
    setshowResults(true);
    setloading(true);
    setresultData("");

    const response = await runChat(prompt);

    const formattedResponse = marked.parse(response);

    setloading(false);
    setresultData(formattedResponse);
  };


  // START NEW CHAT
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
    loadPrompt,
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