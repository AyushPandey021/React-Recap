import React, { useState } from "react";

const App = () => {
  // Usestate hook with pratical
  const [num, setNum] = useState([10, 20, 30]);
  const [user, setUser] = useState("Amit Kumar");
  const [val, setVal] = useState(0);
  function changeNum() {
    setNum([40, 50, 60]);
  }
  function changeUser() {
    setUser("Ankit Sharma");
  }

  function increment() {
    setVal(val + 1);
  }
  function decrement() {
    if (val <= 0) {
      return;
    }
    setVal(val - 1);
  }
  function Jumbtan() {
    setVal(val + 10);
  }

  return (
    <>
      <div>Use State Hook Click to change value </div>
      <h2>Name of Num User is {user} </h2>
      <button onClick={changeUser}>Click to Change User</button>
      <h1>Value is {num}</h1>
      <button onClick={changeNum}>Click Me</button>
      {/* Counter */}
      <h1>Counter 🔢</h1>
      <h2>Count Values : {val}</h2>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      <button onClick={Jumbtan}>Jumb by 10 </button>
    </>
  );
};

export default App;
