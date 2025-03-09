import React from 'react'
import './navbar.css'
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom'

const Route1 = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
  <div className="nav-route">
      <nav class="menu menu-1">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#" onClick={() => scrollToSection('about')}>About</a></li>
    <li><a href="#" onClick={() =>scrollToSection('sticker')}>Sticker</a></li>
    <li><a href="#" onClick={() =>scrollToSection('foot')}>contact</a></li>
  </ul>
</nav>
  </div>
   
  )
}

export default Route1