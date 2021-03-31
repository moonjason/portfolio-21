import './projects.scss'
import { projects, personal } from './content.json';

function Projects() {

    const setContent = () => { 
      return  projects.map( (project, i) => {
        return  <div className="tab">
                  <input type="radio" id={`rd${i+1}`} name="rd"/>
                  <label className="tab-label" data-text={project.name} htmlFor={`rd${i+1}`}>{project.name} </label>
                  <div className="tab-content">
                    <img className="tab-img" src={project.img} alt="project"/>
                    <div className="tab-text">
                      <br/>
                       <span className="company">via {project.company}</span>
                      <br/>
                      <br/>
                      {project.description.intro}
                      <br/>
                      <br/>
                      {project.description.summary}
                      <br/>
                      <br/>
                      <ul>
                          {
                            project.contributions.map((bullet, i) => <li className="task" key={`task-${i}`}>{bullet}</li>)
                          }
                      </ul>
                      <br/>
                      <br/>
                      <p className="tech">Tech:</p>
                      {project.tech}
                    </div>
                  </div>
                </div>
      })
    }

    const setPersonal = () => { 
      return  personal.map( (project, i) => {
        let index = projects.length + i;
        return  <div className="tab">
                  <input type="radio" id={`rd${index+1}`} name="rd"/>
                  <label className="tab-label tab-label-personal" data-text={project.name} htmlFor={`rd${index+1}`}>{project.name} </label>
                  <div className="tab-content">
                    <img className="tab-img" src={project.img} alt="project"/>
                    <div className="tab-text">
                      <br/>
                      {project.description.intro}
                      <br/>
                      <br/>
                      {project.description.summary}
                      <br/>
                      <br/>
                      <ul>
                          {
                            project.contributions.map((bullet, i) => <li className="task" key={`task-${i}`}>{bullet}</li>)
                          }
                      </ul>
                      <br/>
                      <br/>
                      <p className="tech">Tech:</p>
                      {project.tech}
                    </div>
                  </div>
                </div>
      })
    }
    return (
      <div className="container">
        <div className="accordion">
          <div className="section">from work</div>
          <div className="tabs">
              {setContent()}
          </div>
          <div className="section">personal</div>
          <div className="tabs">
              {setPersonal()}
          </div>
        </div>
      </div>
    );
 } 

export default Projects