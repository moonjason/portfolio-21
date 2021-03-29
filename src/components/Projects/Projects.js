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
                <label className="tab-label" data-text="E.C.H.O." htmlFor="rd1">E.C.H.O.</label>
                <div className="tab-content">
                  <img src="https://via.placeholder.com/150" alt="project"/>
                  <div className="tab-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                  </div>
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd2" name="rd"/>
                <label className="tab-label" data-text="Spotify Wrapped 2020" htmlFor="rd2">Spotify Wrapped 2020</label>
                <div className="tab-content">
                  <img src="https://via.placeholder.com/150" alt="project"/>
                  <div className="tab-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                  </div>
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd3" name="rd"/>
                <label className="tab-label" htmlFor="rd3">Promo Cards by Spotify</label>
                <div className="tab-content">
                  <img src="https://via.placeholder.com/150" alt="project"/>
                  <div className="tab-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                  </div>
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd4" name="rd"/>
                <label className="tab-label" htmlFor="rd4">Sign for Jimmie</label>
                <div className="tab-content">
                  <img src="https://via.placeholder.com/150" alt="project"/>
                  <div className="tab-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                  </div>
                </div>
              </div>
              <div className="tab">
                <input type="radio" id="rd5" name="rd"/>
                <label className="tab-label" htmlFor="rd5">Trolli Deliciously Dark Escape</label>
                <div className="tab-content">
                  <img src="https://via.placeholder.com/150" alt="project"/>
                  <div className="tab-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos, facilis.
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
 } 

export default Projects