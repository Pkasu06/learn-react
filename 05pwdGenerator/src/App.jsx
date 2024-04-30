import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    numAllowed ? str += "0123456789" : null;
    charAllowed ? str += "`!@#$%^&*(){}++_~<>?" : null;
    for(let i= 0; i < length; i++){
      pass += str.charAt(Math.ceil(Math.random() * str.length))
    }

    setPassword(pass);

  }, [length, numAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    //passwordRef.current?.setSelectionRange(0, 3)
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-4 my-8 text-white bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input type="text" name="password" className="outline-none w-full py-1 px-3 text-orange-500" placeholder="password" value={password} readOnly ref={passwordRef}/>
          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min = {8} max = {100} value={length} className="cursor-pointer" onChange={(e) => setLength(e.target.value)}/>
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="numInput" defaultChecked={numAllowed} onChange={() => setNumAllowed((prev) => !prev)} />
            <label>numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" id="charInput" defaultChecked={charAllowed} onChange={() => setCharAllowed((prev) => !prev)} />
            <label>characters</label>
          </div>
        </div>
      </div>
    </>    
  )
}

export default App
