import React from 'react';

function Counter() {
  const [count, setCount] = React.useState<number>(0);

  return (
    <>
      <h3>Count: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
