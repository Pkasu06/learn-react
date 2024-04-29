import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen" style={{backgroundColor: color}}>
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl text-white">
          <button onClick={(e) => {setColor(e.target.innerText)}} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={(e) => setColor(e.target.innerText)} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={(e) => setColor(e.target.innerText)} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={(e) => setColor(e.target.innerText)} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={(e) => setColor(e.target.innerText)} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor: "teal"}}>Teal</button>
        </div>
      </div>
    
    </>
  )
}

export default App
