import { useState } from "react";
import { useEffect } from "react";

var UseEffect = () => {
  const [text, setText] = useState(""); 
    useEffect(()=>
    {
        setText("kongu")
    }),[text]
  return (
    <section>
      <h1>Use Effect Example</h1>
      <input
        type="text"
        value={text}
        onChange={(e)=>{setText(e.target.value)}}
        placeholder="Type something..."
      />
      <h1>Typed Text {text}</h1>
    </section>
  );
};

export default UseEffect;
