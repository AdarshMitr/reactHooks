import { useState } from 'react'
import './App.css'


function countInit(){
  console.log('run function');
  return 9;
};

function App() {

  let msg='<Welcome World/>'
  
const [count, setCount]=useState(9);
const [theme, setTheme]=useState('white');

function decrCount(){
   setCount(prevCount=>prevCount-1) ;
   setTheme('white');
}

function incrCount(){
  setCount(prevCount=>prevCount+1)  ;
  setTheme('black');
}
  return (
     <>
     <h1>{msg}</h1>
     <br />
      <button onClick={decrCount}>-</button>
      <span> {count} </span>
      <span> {theme} </span>
      <button onClick={incrCount}>+</button>
     
     </>
  )
}

export default App
