import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Chai from './components/Chai'

function App() {

  const myobj = {
    name:"ayush",
    age: 22
  }
  const [count, setCount] = useState(0)

  return (
    <>
    <Chai username="chai aur code"/>
    <Chai username="chai aur React" priceText = "500"/>
    </>
  )
}

export default App
