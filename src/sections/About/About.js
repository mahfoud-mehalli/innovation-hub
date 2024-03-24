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
          Explore our agency's exceptional approach to training programs and event organization. With extensive expertise and a focus on tailored, hands-on experiences, we provide industry-relevant content and valuable networking opportunities. Join us to unlock your full potential and achieve success in your endeavors.
          </p>
          <ul className="about-list">
            <li className="about-list-elements">
              <img src={icon} alt="ring-icon" />
              High expertise and proven success record.
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Tailored programs to meet specific needs.
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Hands-on, interactive learning experiences.
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Flexible scheduling options.
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Commitment to excellence and quality standards.
            </li>
            <li>
              <img src={icon} alt="ring-icon" />
              Positive testimonials and feedback.
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
