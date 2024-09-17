import React from 'react'
import './Sidebar.css'
import { IoIosAddCircle } from "react-icons/io";
import { CiBoxList } from "react-icons/ci";
import { RiLogoutCircleFill } from "react-icons/ri";
import { NavLink } from 'react-router-dom';
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebar-options">
        <NavLink to={'/list'} className="sidebar-option">
          <CiBoxList/>
          <p>List items</p>
        </NavLink>
        <NavLink to={'/overview'} className="sidebar-option">
          <IoIosAddCircle/>
          <p>overview</p>
        </NavLink>

        <NavLink to={'/'} className="sidebar-option">
          <RiLogoutCircleFill/>
          <p>Logout</p>
        </NavLink>
      </div>
    </div>
  )
}

export default Sidebar
