
import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
 const [length,setLength]=useState(8);
 const [numberAllowed,setNumberAllowed]=useState(false);
 const [charecterAllowed,setCharecterAllowed]=useState(false);
 const [password,setPassword]=useState('')
  return (
    <>
   
      <h1 className='text-4xl text-center p-8 font-bold'>PassWord Generator</h1>
      <Card length={length} password={password}></Card>
      
    </>
  )
}

export default App
