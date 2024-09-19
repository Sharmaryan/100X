import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'

function App() {
  const [title, setTitle] = useState('header 1')

  return (
    <div>
      <button onClick={() => {
        setTitle(Math.random())
      }}>click to change the title</button>
      <Header title={title} />
      <Header title='header 2' />
      <Header title='header 2' />
      <Header title='header 2' />
      <Header title='header 2' />
    </div>
  )
}

export default App
