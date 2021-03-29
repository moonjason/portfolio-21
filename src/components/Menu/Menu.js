import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './menu.scss'

function Menu() {
  let [ over, setOver ] = useState({ over: false, color: ''});
  let [ current, setCurrent] = useState('About')
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
            route = '/'
            break;
          case "Projects":
            route = '/projects'
            break;
          case "Resume":
            route = '/resume'
            break;
          default:
            route = '/contact'
        }
        return <NavLink key={`link-${i}`}activeClassName="nav-filled" className="link nav-fill" exact to={route} style={{ textDecoration: 'inherit'}}>
                  <span onClick={e => handleEvent(e)} onMouseOut={(e)=> handleEvent(e)} onMouseOver={(e)=> handleEvent(e)}>{section}</span>
                </NavLink> 
        // return  <li className="nav-fill" style={style} key={`menu-${i}`}>
        //           <NavLink activeStyle="" className="link nav-fill"to={route} style={{ color: 'inherit', textDecoration: 'inherit'}}>
        //             <span onClick={e => handleEvent(e)} onMouseOut={(e)=> handleEvent(e)} onMouseOver={(e)=> handleEvent(e)}>{section}</span>
        //           </NavLink> 
        //         </li>
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
        </ul>
      </div>
    );
  }

export default Menu