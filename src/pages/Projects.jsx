import React from 'react';
import Header from '../components/Header'
import './Projects.css'

class Projects extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <div className='projects'>
              <h1>Projects</h1>
            </div>
        </div>
    );
  }
}

export default Projects;