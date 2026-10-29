import { useState } from 'react'
import ChatInput from './ChatInput.jsx'
import ChatMessage from './ChatMessage.jsx'
import ChatMessages from './ChatMessages.jsx'
import './App.css'


function App() {
  //usestate 3ashn lma el variable el ana ba3tholo yet8yar a2olo ya-rerender
  //chatMessages fyha el intial values
  //setchangesmessages fyha el cahnged 
  const [chatMessages, setChatMessages] = useState([
        { message: "Hello", sender: "User" },
        { message: "How can I help you?", sender: "Bot" },
        { message: "What is today's date?", sender: "User" },
        { message: "Today's date is October 29, 2026.", sender: "Bot" },
    ])

  return <>
    <ChatInput chatMessages={chatMessages} setChatMessages={setChatMessages} />
    <ChatMessages chatMessages={chatMessages} />
  </>
}

export default App
