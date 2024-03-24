import React from "react"
import "./Courses.css"
import course1 from "../../assets/course1.png"
import course2 from "../../assets/course2.png"
import course3 from "../../assets/course3.png"
import course4 from "../../assets/course4.png"
import course5 from "../../assets/course5.png"
import course6 from "../../assets/course6.png"

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="courses-content">
        <div className="courses-title">
          <h2>Our Training Programs</h2>
        </div>
        <div className="courses-cards">
          <div className="courses-card">
            <img src={course1} alt="card-image" />
            <div className="courses-infos">
              <h3 className="courses-card-title">
                Introduction to Web Development
              </h3>
              <div>
                <span>
                  <p>By Mahfoud Mehalli</p>
                  <p>Free</p>
                </span>
                <span>
                  <p>LEVEL : Beginner</p>
                  <button onclick="openModal()">Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={course2} alt="card-image" />
            <div className="courses-infos">
              <h3 className="courses-card-title">
                  Digital Marketing
              </h3>
              <div>
                <span>
                  <p>By Mahfoud Mehalli</p>
                  <p>Free</p>
                </span>
                <span>
                  <p>LEVEL : Intermidiate</p>
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={course3} alt="card-image" />
            <div className="courses-infos">
              <h3 className="courses-card-title">
                  Employe Training
              </h3>
              <div>
                <span>
                  <p>By Mahfoud Mehalli</p>
                  <p>Free</p>
                </span>
                <span>
                  <p>LEVEL : Beginner</p>
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={course4} alt="card-image" />
            <div className="courses-infos">
              <h3 className="courses-card-title">
                  International Business Managment
              </h3>
              <div>
                <span>
                  <p>By Mahfoud Mehalli</p>
                  <p>Free</p>
                </span>
                <span>
                  <p>LEVEL : Intermidiate</p>
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={course5} alt="card-image" />
            <div className="courses-infos">
              <h3 className="courses-card-title">
                  Charecter Design
              </h3>
              <div>
                <span>
                  <p>By Mahfoud Mehalli</p>
                  <p>Free</p>
                </span>
                <span>
                  <p>LEVEL : Beginner</p>
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={course6} alt="card-image" />
            <div className="courses-infos">
              <h3 className="courses-card-title">
                  Social Psychology
              </h3>
              <div>
                <span>
                  <p>By Mahfoud Mehalli</p>
                  <p>Free</p>
                </span>
                <span>
                  <p>LEVEL : Advanced</p>
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses
