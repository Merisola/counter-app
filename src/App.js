import React from "react";
import Counter from "./Counter";
import './App.css';

function App() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <h1>Welcome to my Counter App</h1>
      <div className="counter-box d-flex flex-column justify-content-center align-items-center">
      <Counter />
    </div>
    </div>
  );
}

export default App;
