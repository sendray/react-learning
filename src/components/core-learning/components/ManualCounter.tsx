import { useState } from "react";
import AutoCounter from "./AutoCounter";

const ManualCounter = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((count) => ++count);
  };

  const decrementCounter = () => {
    count > 0 && setCount((count) => --count);
  };

  return (
    <>
      <p>I am a Manual Counter component</p>
      <p>Count: {count}</p>
      <div className="flex gap-3 mt-2"> 
      <button
        onClick={incrementCounter}
        className="p-1 border borer-solid border-gray-500 w-12"
      >
        +
      </button>
      <button
        onClick={decrementCounter}
        className="p-1 border borer-solid border-gray-500 w-12"
      >
        -
      </button>
      </div>

      <div className="mt-5"></div>

      <AutoCounter />
    </>
  );
};

export default ManualCounter;
