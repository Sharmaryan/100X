import { useState } from 'react'
import './App.css'
// import { Header } from './components/Header'
// import { Todo } from './components/Todo'
import { CardColorChanger } from './components/CardColorChanger'
import { CountEverySecond } from './components/CountEverySecond'
import { MouseTracker } from './components/MouseTracker'
import { Toggle } from './components/Toggle'

function App() {
  // const [title, setTitle] = useState('header 1')

  const [todos, setTodos] = useState([{
    id: 1,
    title: 'gym',
    description: 'gym jaao'
  },
  {
    id: 2,
    title: 'gym 2',
    description: 'gym jaao 2'
  },
  {
    id: 3,
    title: 'gym 3',
    description: 'gym jaao 3'
  }
  ])

  return (
    <div>
      {/* <MouseTracker render={({x,y}) => (<p>The mouse position is ({x}, {y})</p>)}/> */}
      <Toggle render={(on, handleToggle) => {
        return <div>
          <div>{on ? 'ON' : 'OFF'}</div>
          <button onClick={handleToggle}>{on ? 'OFF' : 'ON'}</button>
        </div>
      }} />
      {/* <CardColorChanger /> */}
      {/* <CountEverySecond /> */}
      {/* <button onClick={() => {
        setTodos([...todos, {
          id: Math.random() + 1,
          title: 'gym' + ' ' + Math.random(),
          description: 'description' + ' ' + Math.random(),
        }])
      }}>click to change the title</button> */}

      {/* to see memo in action uncomment this */}
      {/* <button onClick={() => {
        setTitle(Math.random())
      }}>click to change the title</button>
      <Header title={title} />
      <Header title='header 2' />
      <Header title='header 2' />
      <Header title='header 2' />
      <Header title='header 2' /> */}

      {/* {todos.map((todo) => {
        return <Todo {...todo} key={todo.id}/>
      })} */}
    </div>
  )
}

export default App
