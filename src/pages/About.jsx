import React from 'react';
import Header from '../components/Header'
import './About.css'
class About extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <div className='about'>
            <h1>Desenvolvedor Front-end | Estudante de Engenharia de Softwate | CSS | JavaScript | React</h1>
          </div>
        </div>
    );
  }
}

export default About;