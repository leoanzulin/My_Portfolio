import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


class About extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='name'>
          <Link to="/" style={{textDecoration:"none"}}> Leonardo Anzulin </Link>
        </div>
        <div className='links'>         
         <Link to="/about" style={{textDecoration:"none"}}> Sobre </Link>
         <Link to="/projects" style={{textDecoration:"none"}}> Projetos </Link>
         <Link to="/contact" style={{textDecoration:"none"}}> Contato </Link>
         </div>
      </div>
    );
  }
}

export default About;