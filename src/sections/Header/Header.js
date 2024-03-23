import React from "react"
import "./Header.css"
import menu from "../../assets/menu.svg"
import close from "../../assets/close.svg"

const Header = () => {
  return (
    <header className="header-section">
      <div className="header-content">
        <span className="header-logo">innovation.</span>
        <nav className="header-nav">
          <a href="#hero">Home</a>
          <a href="#about">About</a>
          <a href="#courses">Courses</a>
          <a href="#contact">Contact</a>
        </nav>
        {/* <nav>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />
          <div>
            <nav className="header-nav">
              <a href="#hero">Home</a>
              <a href="#about">About</a>
              <a href="#courses">Courses</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </nav> */}
      </div>
    </header>
  )
}

export default Header
