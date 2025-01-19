import React from 'react'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const {list} = useSelector(({categories})=> categories)
  
  console.log('list', list)

  return (
    <section className='sidebar'>
      <div className='sidebar-title'>CATEGORIES</div>
      <nav className='sidebar-links'>
        <ul className='sidebar-menu'>
          {list.filter((item,index)=>index < 5).map((item)=>{
            return ( <li key={item.id} className='medium'>
              <NavLink 
               className={({isActive})=>`link ${isActive ? "active" : ""}`} 
               to={`/categories/${item.id}`}>{item.name}</NavLink>
            </li>)
           
          })}
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