
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
let[counter,setCounter]=useState(0);
function increaseCount(){
  setCounter(counter+1);
}
  return (
    <div>
        <p>Button clicked {counter} times</p>
        <button onClick={increaseCount}>Click me</button>
    </div>
  )
}

export default App
