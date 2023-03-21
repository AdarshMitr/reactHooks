import { useState } from 'react'
import './App.css'


function countInit(){
  console.log('run function');
  return 9;
};

function App() {

  let msg='<Welcome World/>'
  
const [count, setCount]=useState(()=>countInit());

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
