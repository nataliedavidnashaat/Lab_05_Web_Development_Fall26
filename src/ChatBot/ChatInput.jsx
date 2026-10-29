import { useState } from 'react'

function ChatInput(props) {
  const chatMessages  = props.chatMessages;
  const setChatMessages = props.setChatMessages;

  const [input, setInput] = useState("");

  function saveInputText(event) {
    setInput(event.target.value);
  }

  function addMessage() {
    setChatMessages([...chatMessages, { message: input, sender: "User" }]);
    }

  return (
    <>
      <input type="text" placeholder="Type your message to ChatBot..." size="30" onChange= {saveInputText}/>
      <button onClick={addMessage}>Send</button>
    </> 
    // fragments
  );
}

export default ChatInput;