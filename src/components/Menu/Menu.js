import { useState } from 'react';
import { Link } from 'react-router-dom';
import './menu.scss'

function Menu() {
  let [ over, setOver ] = useState({ over: false, color: ''});
  let [ listAnimate, setListAnimate ] = useState('slide-right');

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

        return  <li className={listAnimate} style={style} key={`menu-${i}`}>
                  <Link to={route} style={{ color: 'inherit', textDecoration: 'inherit'}}>
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

      if ( e.type === 'click') {
        setListAnimate('slide-left')
      } 

    }

    return (
      <div className="menu-container" style={bgStyle}>
        <ul className="menu">
          {setContent()}
        </ul>
      </div>
    );
  }

export default Menu