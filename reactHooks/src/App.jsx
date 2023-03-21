import { useState } from 'react'
import './App.css'

function App() {

  let msg='<Welcome World/>'
  
const [count, setCount]=useState(9);

function decrCount(){
  setCount(prevCount=>prevCount-1);
}

function incrCount(){
  setCount(prevCount=>prevCount+1);
}
  return (
     <>
     <h1>{msg}</h1>
     <br />
      <button onClick={decrCount}>-</button>
      <span> {count} </span>
      <button onClick={incrCount}>+</button>
     
     </>
  )
}

export default App
