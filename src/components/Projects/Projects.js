import './projects.scss'
import { projects } from './content.json';

function Projects() {

    const setContent = () => { 
      
    }

    return (
      <div className="container">
        <div className="accordion">
          <div className="tabs">
              <div className="tab">
                <input type="radio" id="rd1" name="rd"/>
                <label className="tab-label" for="rd1">E.C.H.O.</label>
                <div className="tab-content">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd2" name="rd"/>
                <label className="tab-label" for="rd2">Spotify Wrapped 2020</label>
                <div className="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd3" name="rd"/>
                <label className="tab-label" for="rd3">Promo Cards by Spotify</label>
                <div className="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd4" name="rd"/>
                <label className="tab-label" for="rd4">Sign for Jimmie</label>
                <div className="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd4" name="rd"/>
                <label className="tab-label" for="rd4">Trolli Delicioulsy Dark Escape</label>
                <div className="tab-content">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil, aut.
                </div>
              </div>
          </div>
        </div>
      </div>
    );
 } 

export default Projects