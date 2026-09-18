import { useState } from 'react';

const AutoCounter = () => {
  const [count, setCount] = useState<number>(0);


  return (
    <>  
      I am an auto complete component
      <p>Count: {count}</p>
      <button onClick={() => setCount(count => count + 1)}>+</button>
    </>
  )
}


export default AutoCounter;