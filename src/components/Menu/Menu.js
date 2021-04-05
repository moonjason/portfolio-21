import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss'

function Menu() {
  let [ over, setOver ] = useState({ over: false, color: ''});
    const content = ['About', 'Projects']
    

    function setContent() {
      return content.map((section, i) => {
        let route;
        switch(section) {
          case "About":
            route = '/'
            break;
          case "Projects":
            route = '/projects'
            break;
          default: 
            route = '/'
        }
        return <NavLink key={`link-${i}`}activeClassName="nav-filled" className="link nav-fill" exact to={route} style={{ textDecoration: 'inherit'}}>
                  <span onClick={e => handleEvent(e)} onMouseOut={(e)=> handleEvent(e)} onMouseOver={(e)=> handleEvent(e)}>{section}</span>
                </NavLink> 
      })
    }

    const handleEvent = (e) => {
      if (e.type === 'mouseover') {
        switch(e.target.textContent) { 
          case "About":
            setOver({over: true, color: '#DFF0EA'})
            break;
          case "Projects":
            setOver({over: true, color: '#95ADBE'})
            break;
          case "Resume":
            setOver({over: true, color: '#574F7D'})
            break;
          default:
            setOver({over: true, color: '#4F3A65'})  
        }
      } else { 
        setOver({over: false, color: 'white'})  
      }
      
    }

    return (
      <div className="nav-container">
        <h1 className="header slide-top">Jason Moon // Software Dev</h1>
        <ul className="nav-list slide-top">
          {setContent()}
          <a target="_blank" rel="noreferrer" href={`https://storage.googleapis.com/portfolio-36df2.appspot.com/resume.pdf?${Date.now()}`} className="link nav-fill" style={{ textDecoration: 'inherit'}}>
            <span>Resume</span>
          </a> 
          <a href="mailto: jasonmoonjm@gmail.com" className="link nav-fill" style={{ textDecoration: 'inherit'}}>
            <span>Contact</span>
          </a> 
          <a target="_blank" rel="noreferrer" href="https://linkedin.com/in/jasonmoon96" className="link nav-fill" style={{ textDecoration: 'inherit'}}>
            <span>LinkedIn</span>
          </a> 
          <a target="_blank" rel="noreferrer" href="https://github.com/moonjason" className="link nav-fill" style={{ textDecoration: 'inherit'}}>
            <span>Github</span>
          </a> 
        </ul>
      </div>
    );
  }

export default Menu