import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({token}) {
  return (
    <div className='Navbar'>
        <Link to={"/"}> Home </Link>
        <Link to={"/Login"}> Login </Link>
        {token ? null : <Link to={"/Register"}> Register </Link>}
    </div>
  )
}

export default Navbar