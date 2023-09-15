import React from 'react'
import classes from './Header.module.css'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <div className={classes.container}>
       <header>
        <div className={classes.image}>
        <img src={logo} alt='/'/>
        </div>
        <nav>
            <li>Home</li>
            <li>Find a doctor</li>
            <li>Apps</li>
            <li>Testimonials</li>
            <li>About us</li>
        </nav>
        <span className={classes.menuContainer}>&#8801;</span>
       </header>
    </div>
  )
}

export default Header