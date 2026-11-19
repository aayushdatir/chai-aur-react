import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"  style={{ backgroundColor: color }}>
      <button className= 'bg-red bg-red-700 text-white font-bold py-2 px-4 rounded border border-white-500' onClick={() => setColor('red')}>Red</button>
      <button className= 'bg-blue bg-blue-700 text-white font-bold py-2 px-4 rounded border border-white-500' onClick={() => setColor('blue')}>Blue</button>
      <button className= 'bg-green bg-green-700 text-white font-bold py-2 px-4 rounded border border-white-500' onClick={() => setColor('green')}>Green</button>
      <button className= 'bg-gray-700 text-white font-bold py-2 px-4 rounded border border-white' onClick={() => setColor('grey')}>Grey</button>
      <button className= 'bg-yellow bg-yellow-700 text-white font-bold py-2 px-4 rounded border border-white-500' onClick={() => setColor('yellow')}>Yellow</button>
      <button className= 'bg-purple bg-purple-700 text-white font-bold py-2 px-4 rounded border border-white-500' onClick={() => setColor('purple')}>Purple</button>
      <button className= "bg-violet-500 text-white font-bold py-2 px-4 rounded border border-white" onClick={() => setColor('#E6E6FA')}>Lavender</button>
      <button className= 'bg-black text-white font-bold py-2 px-4 rounded border border-white' onClick={() => setColor('black')}>Black</button>


</div>
  )
}

export default App
