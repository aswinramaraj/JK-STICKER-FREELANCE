import React from 'react'
import './navbar.css'
import  './route-navber'
import Route1 from './route-navber'

const Navbar1 = () => {
  return (
    <div className='nav-container' id='nav'>
        <div className="logo-img">
            <img src="logo.png" alt="JK stickers"  className='logo-class' />
           
        </div>

        <div className="route">
            <Route1/>
        </div>
    </div>
  )
}

export default Navbar1