import { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'

function Menu() {
  let [ over, setOver ] = useState({ over: false, color: ''});

    const content = ['About', 'Projects', 'Resume', 'Contact']
    
    let bgStyle = {
      backgroundColor: over.color
    }

    function setContent() {
      let delay = 0.1
      return content.map((section, i) => {
        let style = { 
          animationDelay: `${delay}s`
        }
        delay += 0.115

        let route;
        switch(section) {
          case "About":
            route = '/about'
            break;
          case "Projects":
            route = '/projects'
            break;
          case "Resume":
            route = '/#'
            break;
          default:
            route = '/contact'
        }

        return  <li className="nav-fill" style={style} key={`menu-${i}`}>
                  <Link className="link"to={route} style={{ color: 'inherit', textDecoration: 'inherit'}}>
                    <span onClick={e => handleEvent(e)} onMouseOut={(e)=> handleEvent(e)} onMouseOver={(e)=> handleEvent(e)}>{section}</span>
                  </Link> 
                </li>
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
        <ul className="nav-list">
          {setContent()}
        </ul>
      </div>
    );
  }

export default Menu