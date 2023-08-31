import { React, useState } from 'react'
 
export default function App() {
  const [counter, setCounter] = useState(0);
 
  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };
 
  //decrease counter
  const decrease = () => {
    if (counter > 1) {
        setCounter(count => count - 1);
    }
  };
 
//   //reset counter 
//   const reset = () =>{
//     setCounter(0)
//   }
 
  return (
    <div >
      <div>
        <button onClick={increase}>+</button>
        <span >{counter}</span>
        <button onClick={decrease}>-</button>
        <button>Agregar</button>
      </div>
    </div>
  );
}