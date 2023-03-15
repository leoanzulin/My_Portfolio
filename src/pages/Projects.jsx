import React from 'react';
import Header from '../components/Header'
import projects from '../data';
import ProjectCard from '../components/ProjectCard';
import './Projects.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Projects extends React.Component {
  render() {
    return (
        <div>
            <div className='projects'>
            <Header/>
              <div className='tittle'>
                <h1>Projetos</h1>
              </div>
              <div className="Projects-box">
                {projects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </div>
        </div>
    );
  }
}

export default Projects;