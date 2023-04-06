import { useEffect, useState } from 'react'
import './App.css'


function countInit(){
  console.log('run function');
  return 9;
};

function App() {

  /*
// ----------- useState hook example  ----------

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
      <span> Count &#9758; {count} </span>
    
      <button onClick={incrCount}>+</button><br /><hr />
      <span>  Theme :{theme} </span>
     </>
  )


// ----------- useState hook example end  ----------

*/





const [resourceType, setResourceType]= useState('posts')
const [items,setItems]=useState([])
console.log('render');

useEffect(()=>{
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
.then(response => response.json())
.then(json => setItems(json))
} ,[resourceType])

return(
  <>
  <div id='useEffect'>
  <button onClick={()=>setResourceType('posts')}>Posts</button>
  <button onClick={()=>setResourceType('users')}>Users</button>
  <button onClick={()=>setResourceType('comments')}>Comments</button>

  <h1>{resourceType}</h1>

  {items.map(item=>{
return <pre>{JSON.stringify(item)}</pre>
  })}
  </div>
  
  </>

  
)

}
export default App

