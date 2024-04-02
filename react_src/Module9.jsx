import { useState } from "react"
import React from 'react'

function Module9() {

    

    const [count, setCount] = useState(0);
  
    const increment = () => {
      setCount(count + 1);
    };
  
    const decrement = () => {
      setCount(count - 1);
    };
  
    return (
      <div className="container p-5 my-5 bg-primary text-white">
        <h2>Counter: {count}</h2>
        <button onClick={increment} >Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    );
  }


export default Module9