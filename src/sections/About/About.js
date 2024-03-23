import React from "react"
import "./About.css"
import AboutUsImage from "../../assets/about-us-image.png"
import icon from "../../assets/ring.png"

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-content">
        <div>
          <h2 className="about-title">WHY CHOOSE US !</h2>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            tempore voluptate itaque culpa assumenda voluptas, vel odit non
            suscipit repellendus provident quidem, sit cum nesciunt molestias
            similique dolor ea beatae?
          </p>
          <ul className="about-list">
            <li className="about-list-elements">
              <img src={icon} alt="ring-icon" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              beatae debitis
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              beatae debitis
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              beatae debitis
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              beatae debitis
            </li>
          </ul>
        </div>
        <div className="about-image">
          <img src={AboutUsImage} alt="about-us-image" className="" />
        </div>
      </div>
    </section>
  )
}

export default About
