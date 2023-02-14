import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'


class About extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='name'>
          <Link to="/"> Leonardo Anzulin </Link>
        </div>
        <div className='links'>         
         <Link to="/about"> Sobre </Link>
         <Link to="/projects"> Projetos </Link>
         <Link to="/contact"> Contato </Link>
         </div>
      </div>
    );
  }
}

export default About;