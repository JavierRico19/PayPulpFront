import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ width, userInfo }) => {
  return (
    <div className={width > 1000 ? "nav-links" : null}>
    {!localStorage.getItem("token") && (
      <>
        <NavLink to="personal">
          <span>Personal</span>
        </NavLink>
        <NavLink to="business">
          <span>Business</span>
        </NavLink>
        <NavLink to="developer">
          <span>Developer</span>
        </NavLink>
        <NavLink to="help">
          <span>Help</span>
        </NavLink>
      </>
    )}
    {localStorage.getItem("token") && userInfo?.accountType === "personal" && (
      <>
        <NavLink to="dashboard">
          <span>Dashboard</span>
        </NavLink>
        <NavLink to="business">
          <span>Business</span>
        </NavLink>
        {/* <NavLink to="developer">
          <span>Developer</span>
        </NavLink>
        <NavLink to="help">
          <span>Help</span>
        </NavLink> */}
      </>
    )}
  </div>
  )
}

export default NavLinks