import React, { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0);

  function incr(){
    setCount(count+1);
  }

  function decr(){
    setCount(count-1);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incr}>+</button>
      <br/>
      <button onClick={decr}>-</button>
    </div>
  )
}
