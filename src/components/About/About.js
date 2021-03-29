import './About.scss'
// import { useState } from 'react'
import { useHistory, Link } from "react-router-dom";

function About() {
    // let [scroll, setScroll] = useState(0)
    // let [scrolled, setScrolled] = useState(false)

    const history = useHistory();

    const handleWheel = (e) => { 
      // console.log(e)
      // if (e.deltaY > 0) setScroll(scroll++)
      // if (scroll === 40 && !scrolled) { 
      //   setScroll(0)
      //   setScrolled(true)
      //   return history.push('/menu')
      // }
      // return true
    }

    const handleClick = (e) => {
      return history.push('/menu')
    }

    return (
      <div className="about-container" onWheel={e => handleWheel(e)}>
          <div className="about-bg bg--animate"></div>
          <div className="about fade-in"> 
            <div className="column">
              <div className="photo">
                <img src='./images/me-1.jpg' alt="placeholder"/>
              </div>
            </div>
            <div className="column">
              <div className="text">
                I'm Jason, a software engineer, food lover, and unprofessional golfer. I started programming in 2019 out of curiosity and since then, I was able to be apart of really cool projects and pick up several technologies on the way. Javascript is my primary language and I have experience developing with Node, Express, Firebase, GCP, AWS to name a few.
                <br/>
                <br/>
                Thanks for visiting the site. Please check out my projects and resume by clicking on "explore". 
                <br/>
                <br/>
              </div>
            </div>
          </div>
          <div className="explore fade-in-btn">
            <button className="explore__btn fill" onClick={e => handleClick(e)}>
              explore
            </button>
          </div>
        </div>
    );
  } 

export default About