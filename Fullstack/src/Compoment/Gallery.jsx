import { useState } from "react";

const Gallery = () => {
  const [counter, setCounter] = useState(0);

  const onIncrement = () => {
    setCounter(counter + 1);
  }

  return (
    <div style={{height:"80vh"}}>
      <h2 style={{ textAlign: "center" }}>Learning State</h2>
      <h1>The state of my variable counter is {counter}</h1>
      <div style={{display:"flex",justifyContent:"space-around"}}>
      <button onMouseOver={onIncrement}>Increment</button>
      <button onDoubleClick={()=>{setCounter(counter-1) }}>Decrement</button>
      <button onClick={()=>{setCounter(0)}}>Reseat</button>
    </div>
    </div>
  )
}

export default Gallery;
