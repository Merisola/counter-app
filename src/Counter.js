import React, { useState } from "react";

const Counter = () => {
  // State to track the count
  const [count, setCount] = useState(0);
  const [laps, setLaps] = useState([]); // Stores saved counts

  // Function to increase count
  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Function to decrease count
  const decrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    }
  };

  // Function to reset count
  const reset = () => {
    setCount(0);
  };

  // Function to save the current count as a lap
  const saveLap = () => {
    setLaps([...laps, count]);
  };

  // Function to clear laps
  const clearLaps = () => {
    setLaps([]);
  };

  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Counter App</h2>
      <h1 className="mb-4">{count}</h1>
      
      {/* Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button onClick={increment} className="btn btn-success" style={{ width: "100px" }}>
          +
        </button>
        <button onClick={decrement} className="btn btn-danger" style={{ width: "100px" }}>
          -
        </button>
        <button onClick={reset} className="btn btn-warning" style={{ width: "100px" }}>
          Reset
        </button>
      </div>

      {/* Save & Clear Laps Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-4">
        <button onClick={saveLap} className="btn btn-primary" style={{ width: "100px" }}>
          Save
        </button>
        <button onClick={clearLaps} className="btn btn-secondary" style={{ width: "100px" }}>
          Clear Laps
        </button>
      </div>

      {/* Display saved laps */}
      <div className="mt-4">
        <h4>Laps</h4>
        {laps.length === 0 ? (
          <p>No laps saved</p>
        ) : (
          <ul className="list-group">
            {laps.map((value, index) => (
              <li key={index} className="list-group-item">
                Lap {index + 1}: {value}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Counter;
