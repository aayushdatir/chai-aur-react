import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'



function App() {
  let [counter, setCounter] = useState(15)

  const addCounter = () =>{
    
    if(counter < 20){
        counter += 1
        setCounter(counter)
    }

        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)
        // setCounter(counter + 1)

        // setCounter((s) => s + 1)
        // setCounter((s) => s + 1)
        // setCounter((s) => s + 1)
        // setCounter((s) => s + 1)



    // console.log(counter)
  console.log("clicked")
}

const removeCounter = () =>{
  if(counter > 0){
      counter -= 1
      setCounter(counter)
  }

}

  return (
    <>
    <h1>Counter: {counter}</h1>
    <button onClick={addCounter}>Counter</button>
    <br/>
    <button onClick={removeCounter}>Remove Counter</button>
    </>
  )
}

export default App
