import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='Navbar'>
        <Link to={"/"}> Home </Link>
        <Link to={"/Login"}> Login </Link>
        <Link to={"/Register"}>Register</Link>
    </div>
  )
}

export default Navbar