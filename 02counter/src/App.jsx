import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter, setCounter] =useState(15)
  
  // let counter = 5 
  const addValue = () => {
    // counter = counter + 1
    if(counter < 20){
    setCounter(counter+1) //output value
    }
    else console.log("Counter cannot go after 20!");
    console.log("clicked", counter);
  }

  const minusVal = () => {
    // counter = counter - 1
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      console.log("Counter cannot go below 0!");
    }
  }

  return (
    <>
    <h1> Hey </h1>
    <h2> Counter value: {counter}</h2>

    <button onClick={addValue}> Add value </button>
    <br/>
    <button onClick={minusVal}> Remove value </button>
    
    </>
        )
}

export default App
