import './projects.scss'
import { projects } from './content.json';

function Projects() {

    const setContent = () => { 
      return  projects.map( (project, i) => {
        return  <div className="tab">
                  <input type="radio" id={`rd${i+1}`} name="rd"/>
                  <label className="tab-label" data-text={project.name} htmlFor={`rd${i+1}`}>{project.name} </label>
                  <div className="tab-content">
                    <img className="tab-img" src={project.img} alt="project"/>
                    <div className="tab-text">
                      {project.description}
                    </div>
                  </div>
                </div>
      })
    }

    return (
      <div className="container">
        <div className="accordion">
          <div className="tabs">
              {setContent()}
          </div>
        </div>
      </div>
    );
 } 

export default Projects