import { useState } from 'react';

const MyUI = () => {
    // const name = 'React Developer'
    const [name, setName] = useState('React Developer');

    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    }

  return (
    <>
      <h1>Hello {name}!</h1>
      <p>Welcome to the world of React.</p>
      <p>Current Count: {count}</p>
      <button onClick={handleClick}>Click Me </button>
    </>
  )
}

export default MyUI