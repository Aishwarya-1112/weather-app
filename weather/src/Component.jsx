import React, { useState, useEffect, useRef, useMemo } from "react";

const Component = () => {
  const [inputValue, setInputValue] = useState("");
  const [number, setNumber] = useState(0);
  const [theme, setTheme] = useState();

  const valueNumber = useMemo(() => {
    return slow(number);
  }, [number]);

  const valueTheme = {
    background: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };

  const input = useRef();

  // useEffect will run when inputValue changes
  useEffect(() => {
    if (inputValue) {
      console.log(`Input value has been updated to: ${inputValue}`);
    }
  }, [inputValue]);

  const display = () => {
    console.log(input.current.value);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => setTheme((prev) => !prev)}>Show</button>

      <div style={valueTheme}>{valueNumber}</div>

      <input
        ref={input}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something"
      />
      <p>Current input value: {inputValue}</p>
      <button onClick={display}>show</button>
    </div>
  );
};

function slow(num) {
  for (let i = 0; i <= 1000000; i++) {}
  return num * 2;
}

export default Component;
