import React, { useState } from "react";

const Counter = () => {
  // State to track the count
  const [count, setCount] = useState(0);

  // Function to increase count
  const increment = () => {
    setCount(count + 1);
  };

  // Function to decrease count
  const decrement = () => {
    if (count > 0) {
        setCount(count - 1);
      }if (count > 0) {
    setCount(count - 1);
  }
  };

  // Function to reset count
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Counter App</h2>
      <h1 className="mb-4">{count}</h1>
      <div>
        <button
          onClick={increment}
          className="btn btn-success mx-2"
          style={{ width: "100px" }}
        >
          +
        </button>
        <button
          onClick={decrement}
          className="btn btn-danger mx-2"
          style={{ width: "100px" }}
        >
          -
        </button>
        <button
          onClick={reset}
          className="btn btn-warning mx-2"
          style={{ width: "100px" }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
