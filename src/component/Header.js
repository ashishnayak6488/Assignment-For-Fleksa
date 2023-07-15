import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <h1 className='heading'>This page Shows The Collection of some users</h1>
        <p>This is a assignment page for fleksa. This Project is Made up of using React and Redux concept</p>
        <p>Redux is used for state Management. Project Also retrive Public API</p>
        <p>To See the users Click Below</p>
        <Link to={'/users'}><h2>Users</h2></Link>
    </div>
  )
}

export default Header