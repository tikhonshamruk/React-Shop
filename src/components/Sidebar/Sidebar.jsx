import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <section className='sidebar'>
      <div className='sidebar-title'>CATEGORIES</div>
      <nav className='sidebar-links'>
        <ul className='sidebar-menu'>
          <li className='medium'>
            <NavLink to={`/categories/${1}`}>Link</NavLink>
          </li>
        </ul>
      </nav>
      <div className='sidebar-footer'>
        <span className='medium'>Help</span>
        <Link>
        <span>Terms&Conditions</span>
        </Link>
      </div>
    </section>
  )
}

export default Sidebar