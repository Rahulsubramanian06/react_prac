import './App.css'
import axios from 'axios'
import { useState } from 'react'

function  App(){
  async function ap(){
    try{
      let reso = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
      let secnd = reso.data
      console.log(secnd)
    }
    catch(error){
      console.log(error);
    }
  };
  
  ap()
  let [btn, setBtn] = useState(0);

  const addbtn = () => {
    setBtn((val) => {
      return val +1
    })
  }
const decbtn = () => {
  setBtn((cval) => {
    return cval -1
  })
}
  return (
    <div className="App">
      <h1>My React App</h1>
      <h1>{btn}</h1>
      <button onClick={addbtn}>+1</button>
      <button onClick={decbtn}>-1</button>
      {/* Your component content goes here */}
    </div>
  )
}

export default App
