import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:8080')
    socket.onopen = () => {
      console.log('connected')
    }
    socket.onmessage = (message) => {
      console.log('Received message', message.data)
      setMessages(message.data)
    }
    setSocket(socket)
    return () => {
      socket.close()
    }
  },[])

  if (!socket) {
    return <div>Connecting to socket server....</div>;
  }

  return <>
  <input type="text" onChange={(e) => {
    return setInput(e.target.value)
  }}/>
  <button onClick={() => {
    socket.send(input)
  }}>send</button>
  {messages}
  </>;
}

export default App;
