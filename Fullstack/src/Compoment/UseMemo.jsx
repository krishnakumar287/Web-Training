import React, { useState, useMemo } from 'react';

var slowFunction = (num) => {
  for (let i = 0; i < 1000000000; i++) {}
  return num * 2;
};

var UseMemo = () => {
  var [number, setNumber] = useState(0);
  var [theme, setTheme] = useState(true);
  var darkLight = {
    backgroundColor: theme ? 'black' : 'white',
    color: theme ? 'white' : 'black',
  };

  var doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  return (
    <section style={darkLight}>
      <h1>Use Memo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setTheme(!theme)}>Change Theme</button>
      <h2>Doubling the number: {doubleNumber}</h2>
    </section>
  );
};

export default UseMemo;
