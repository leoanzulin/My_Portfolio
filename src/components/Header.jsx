import React from 'react';
import { Link } from 'react-router-dom';


class About extends React.Component {
  render() {
    return (
      <div>
         <Link to="/"> Home </Link>
         <Link to="/about"> Sobre </Link>
         <Link to="/projects"> Projetos </Link>
         <Link to="/contact"> Contato </Link>
      </div>
    );
  }
}

export default About;