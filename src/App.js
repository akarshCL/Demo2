import React, { useState } from 'react'
import Navbar from './authModel/ForgetPassword'

const App = () => {

  const [state, setState] = useState(0)

  const Increment = () => {
    console.log("Increment")
    setState(state + 1)
  }

  const Decrement = () => {
    if (state <= 0) {
      alert("any msg")
    } else {
      setState(state - 1)
    }
  }
  const Reset = () => {

  }
  return (
    <>
      <Navbar />
      <h1>Counter</h1>
      <p> {state}</p>
      <div>
        <button onClick={Increment}>Incment</button>
        <button onClick={Decrement}>Decrement</button>
        <button onClick={Reset} >Reset</button>
      </div>
    </>
  )
}

export default App
