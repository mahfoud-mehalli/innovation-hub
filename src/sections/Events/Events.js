import React, { useState } from "react"
import "./Event.css"
import slideLeft from "../../assets/slide-left.png"
import slideRight from "../../assets/slide-right.png"

const Events = () => {
  const slides = [
    {
      title: "TED-X Show",
      url: "http://localhost:3000/first-event.png",
      location: "Zenit , Constantine , Algeria",
      time: "24 , 25 , 26 Mars 2024",
    },
    {
      title: "TED-X Show",
      url: "http://localhost:3000/first-event.png",
      location: "Zenit , Constantine , Algeria",
      time: "24 , 25 , 26 Mars 2023",
    },
    {
      title: "TED-X Show",
      url: "http://localhost:3000/first-event.png",
      location: "Zenit , Constantine , Algeria",
      time: "24 , 25 , 26 Mars 2022",
    },
  ]
  const [current, setCurrent] = useState(0)

  const slideStyles = {
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[current].url})`,
    position: "relative", // Corrected typo
    paddingLeft: "180px",
    paddingRight: "180px",
    paddingTop: "180px",
    paddingBottom: "180px",
    height: "509px",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "start",
    color: "aliceblue", // Added text color
    textAlign: "center", // Center align text on smaller screens
  }

  const goPrevious = () => {
    const isFirstSlide = current === 0
    const previous = isFirstSlide ? slides.length - 1 : current - 1
    setCurrent(previous)
  }

  const goNext = () => {
    const isLastSlide = current === slides.length - 1
    const next = isLastSlide ? 0 : current + 1
    setCurrent(next)
  }

  console.log(current)

  return (
    <section className="event-section">
      <div className="event-section-title">
        <h2>Our Training Programs</h2>
      </div>
      <div style={slideStyles}>
        <h2 className="event-title">{slides[current].title}</h2>
        <span className="event-location">{slides[current].location}</span>
        <p className="event-time">{slides[current].time}</p>
        <button onClick={goPrevious} className="button-slide-left">
          <img src={slideLeft} alt="slide-left" />
        </button>
        <button onClick={goNext} className="button-slide-right">
          <img src={slideRight} alt="slide-right" />
        </button>
      </div>
    </section>
  )
}

export default Events
