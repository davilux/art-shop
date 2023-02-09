import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='main-navigation'>
      <Router>
        <Link to='/shop' >Shop</Link>
        <Link to='/' >Home</Link>
      </Router>
    </nav>
  )
}

export default Navbar
