import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Appout from './App';
// import  './authModel/AuthModel.css'
// import Authentication from './Authentication/Auth'
import Footer from './Footer/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Appout />
    {/* <Authentication /> */}
    {/* <Footer />  */}
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
