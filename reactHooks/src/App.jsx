import { useRef, useState } from 'react'
import './App.css'




function App() {

// 1.DOM Reference
// 2. useRef for string the previous State
// 3. hold mutable value prevent re-render of component 

const [name,setName]=useState('');

const inputEl=useRef('');
console.log(inputEl)

const resetInput=()=>{
  setName('');
  inputEl.current.focus();
}
return (
  <div className="App">
    <div>
      <input 
      ref={inputEl}
      type="text" 
      name='name'
      autoComplete='off'
      value={name}
      onChange={(e)=>setName(e.target.value)}
       />
       <button onClick={resetInput}>Reset</button>
    </div>
    <h2>My name is {name}</h2>
  </div>
)

}
export default App

