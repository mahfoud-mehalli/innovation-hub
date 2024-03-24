import React from "react"
import "./Reviews.css"
// import slideLeft from "../../assets/slide-left.png"
// import slideRight from "../../assets/slide-right.png"
import photoProfile1 from "../../assets/photo-profile1.jpg"
import photoProfile2 from "../../assets/photo-profile2.jpg"
import photoProfile3 from "../../assets/photo-profile3.jpeg"

const Reviews = () => {
  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY( 0 ,-50%)",
    left: "32px",
    fontSize: "45px",
    color: "#000000",
    zIndex: "10",
    cursor: "pointer",
  }
  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    right: "32px",
    fontSize: "45px",
    color: "#000000",
    zIndex: "10",
    cursor: "pointer",
  }
  return (
    <div id="testimonial" class="responsive-container-block big-container">
      <div class="responsive-container-block bg">
        <p class="text-blk title">What Students Said About Us</p>
        <div class="responsive-container-block blocks">
          <div class="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content">
            <p class="text-blk info-block">
              <strong>“</strong> I've taken several online courses before, but
              this one truly stands out. The material was comprehensive yet easy
              to understand, and the quizzes and assignments helped reinforce my
              learning. I feel more confident in my abilities now, thanks to
              this course!
              <strong>”</strong>
            </p>
            <div class="responsive-container-block person">
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
                <img class="profile-img" src={photoProfile3} />
              </div>
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
                <p class="text-blk name">Mehalli Mahfoud</p>
                <p class="text-blk desig">CEO</p>
              </div>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content">
            <p class="text-blk info-block">
              <strong>“</strong> I've been amazed by the depth of knowledge and
              practical skills I gained from this course! The instructors were
              engaging and the content was well-structured. Highly recommended
              for anyone looking to level up their skills!
              <strong>”</strong>
            </p>
            <div class="responsive-container-block person">
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
                <img class="profile-img" src={photoProfile1} />
              </div>
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
                <p class="text-blk name">Khelfi Aymen</p>
                <p class="text-blk desig">CEO</p>
              </div>
            </div>
          </div>
          <div class="responsive-cell-block wk-desk-1 wk-tab-1 wk-mobile-1 wk-ipadp-1 content bottom">
            <p class="text-blk info-block">
              <strong>“</strong> Taking this course was one of the best
              decisions I've made for my career. The hands-on projects and
              real-world examples helped me grasp complex concepts easily. Plus,
              the support from the community and instructors made the learning
              journey enjoyable.
              <strong>”</strong>
            </p>
            <div class="responsive-container-block person">
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 icon-block">
                <img class="profile-img" src={photoProfile2} />
              </div>
              <div class="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 text-block">
                <p class="text-blk name">Rebbouh Zineddine</p>
                <p class="text-blk desig">CEO</p>
              </div>
            </div>
          </div>
          <div style={leftArrowStyles}></div>
          <div style={rightArrowStyles}></div>
        </div>
      </div>
    </div>
  )
}

export default Reviews
