import { useRef, useState ,useEffect} from 'react'
import './App.css'




function App() {

// 1.DOM Reference
// 2. useRef for string the previous State
// 3. hold mutable value prevent re-render of component 

const [name,setName]=useState('');

const [counter, setCounter]=useState(0);

const inputEl=useRef('');
const previousCounterRef=useRef('');

console.log(inputEl)

const resetInput=()=>{
  setName('');
  inputEl.current.focus();
  
}
useEffect(()=>{
  previousCounterRef.current=counter;
},[counter]);

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
    <div>
      <h3>Random Counter: {counter}</h3>
      {typeof previousCounterRef.current!=="undefined" && (<h2> Previous counter: {previousCounterRef.current}</h2>)} 
      <button onClick={(e)=>setCounter(Math.ceil(Math.random()*100))}> Generate Number</button>
    </div>
  </div>
)

}
export default App

