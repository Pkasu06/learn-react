
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(Math.min(20, counter + 1))
  }

  const removeValue = () => {
    setCounter(Math.max(0, counter - 1))
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Decrease Value</button>
    </>
  )
}

export default App
