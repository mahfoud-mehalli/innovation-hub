import React from "react"
import "./Courses.css"
import cardImage from "../../assets/card-image.png"

const Courses = () => {
  return (
    <section className="courses" id="courses">
      <div className="courses-content">
        <div className="courses-title">
          <h2>Our Training Programs</h2>
        </div>
        <div className="courses-cards">
          <div className="courses-card">
            <img src={cardImage} alt="card-image" />
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
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={cardImage} alt="card-image" />
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
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={cardImage} alt="card-image" />
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
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={cardImage} alt="card-image" />
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
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={cardImage} alt="card-image" />
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
                  <button>Register</button>
                </span>
              </div>
            </div>
          </div>
          <div className="courses-card">
            <img src={cardImage} alt="card-image" />
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
