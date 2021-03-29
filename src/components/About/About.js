import './About.scss'
// import { useState } from 'react'
function About() {

    return (
      <div className="about-container">
          <div className="about-bg bg--animate"></div>
          <div className="about fade-in"> 
            <div className="column">
              <div className="photo">
                <img className="photo-jason" src='./images/me-1.jpg' alt="placeholder"/>
              </div>
            </div>
            <div className="column">
              <div className="text">
                <h2><strong>Welcome !</strong></h2>
                <br/>
                I'm Jason, a software engineer, food lover, and unprofessional golfer. I started programming in 2019 out of curiosity and since then, I was able to be apart of really cool projects and pick up several technologies on the way. Javascript is my primary language and I have experience developing with Node, Express, Firebase, GCP, AWS to name a few.
                <br/>
                <br/>
                Thanks for visiting the site. Please check out my projects and resume by using the links up top.
                <br/>
                <br/>
              </div>
            </div>
          </div>
          {/* <div className="explore fade-in-btn">
            <button className="explore__btn fill" onClick={e => handleClick(e)}>
              explore
            </button>
          </div> */}
        </div>
    );
  } 

export default About