import React, { useState } from "react"
import "./Header.css"
import menu from "../../assets/menu.png"
import close from "../../assets/close.png"

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <header className="header-section">
      <div className="header-content">
        <span className="header-logo">Innovate Hub</span>
        <nav className="header-nav-desktop">
          <a className="header-nav-desktop-childs" clas href="#hero">
            Home
          </a>
          <a className="header-nav-desktop-childs" href="#about">
            About
          </a>
          <a className="header-nav-desktop-childs" href="#courses">
            Courses
          </a>
          <a className="header-nav-desktop-childs" href="#events">
            Events
          </a>
          <a className="header-nav-desktop-childs" href="#testimonial">
            Testimonial
          </a>
          <a className="header-nav-desktop-childs" href="#contact">
            Contact
          </a>
        </nav>
        <div className="header-nav-mobile">
          <img
            src={!toggle ? close : menu}
            alt="menu"
            width={29}
            height={29}
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${toggle ? "hidden" : "header-nav-mobile-container"}`}
          >
            <nav className="nav-elements-mobile">
              <a href="#hero" onClick={() => setToggle(!toggle)}>
                Home
              </a>
              <a href="#about" onClick={() => setToggle(!toggle)}>
                About
              </a>
              <a href="#courses" onClick={() => setToggle(!toggle)}>
                Courses
              </a>
              <a href="#contact" onClick={() => setToggle(!toggle)}>
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
