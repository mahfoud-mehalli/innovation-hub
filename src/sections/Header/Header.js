import React from "react"
import "./Header.css"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        {/* <span className="logo-nav">
          <p>innovation.</p>
        </span> */}
        <nav className="desktop-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
