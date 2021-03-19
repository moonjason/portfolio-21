import { useState } from 'react';
import './menu.scss'

function Menu() {
  let [ over, setOver ] = useState({ over: false, color: ''});

    const content = ['About', 'Projects', 'Resume', 'Contact']
    
    let bgStyle = {
      backgroundColor: over.color
    }

    function setContent() {
      return content.map((section, i) =>  
        <li key={`menu-${i}`}><span onMouseOut={(e)=> handleEvent(e)} onMouseOver={(e)=> handleEvent(e)}>{section}</span></li>
      )
    }

    const handleEvent = (e) => {
      if (e.type === 'mouseover') {
        switch(e.target.textContent) { 
          case "About":
            setOver({over: true, color: 'red'})
            break;
          case "Projects":
            setOver({over: true, color: 'teal'})
            break;
          case "Resume":
            setOver({over: true, color: 'yellow'})
            break;
          default:
            setOver({over: true, color: 'limegreen'})  
        }
      } else { 
        setOver({over: false, color: 'white'})  
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