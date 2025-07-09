// import React, { useState } from 'react'

// const App = () => {

//   const [state, setState] = useState(0)

//   const Increment = () => {
//     console.log("Increment")
//     setState(state + 1)
//   }

//   const Decrement = () => {
//     if (state <= 0) {
//       alert("any msg")
//     }else{
//       setState(state-1)
//     }
//   }
//   const Reset = () => {

//   }
//   return (
//     <>
//       <h1>Counter</h1>
//       <p> {state}</p>
//       <div>
//         <button onClick={Increment}>Incment</button>
//         <button onClick={Decrement}>Decrement</button>
//         <button onClick={Reset} >Reset</button>
//       </div>
//     </>
//   )
// }

// export default App


// App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./ChildB/ChildB";
import About from "./ChildC/ChildC";
import ChildA from "./ChildA/ChildA";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<ChildA/>}/>
      </Routes>



      
    </BrowserRouter>
  );
}

export default App;

