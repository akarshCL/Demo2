import React, { useState } from 'react'

const App = () => {

  const [state, setState] = useState(0)

  const Increment = () => {
    console.log("Increment")
    setState(state + 1)
  }

  const Decrement = () => {
    if (state <= 0) {
      alert("any msg")
    }else{
      setState(state-1)
    }
  }
  const Reset = () => {

  }
  return (
    <>
      <h1>Counter</h1>
      <p> {state}</p>
      <div>
        <button onClick={Increment}>Increment by 1</button>
        <button onClick={Decrement}>Decrement by 1</button>
        <button onClick={Reset} >Reset to 0</button>
      </div>
    </>
  )
}

export default App
