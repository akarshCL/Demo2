import React from 'react'
import "./AuthModel.css"

export default function navbar(){
    return(
        <div>
            <nav class="navbar">
    <div class="navbar-logo">My-Website</div>
    <ul class="navbar-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
        </div>
    )
}