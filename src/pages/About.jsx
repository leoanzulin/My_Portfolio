import React from 'react';
import Header from '../components/Header'
import './About.css'
import html from '../image/html.png'
import js from '../image/jsLogo.png'
import node from '../image/node.png'
import redux from '../image/Redux.png'
import rtl  from '../image/rtl.png'
class About extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <div className='about'>
            <div className='skills'>
              <h1>Skills:</h1>
              <div className='logoImagens'>
                <img src={html} alt="Logo html" />
                <img src={js} alt="logo JS" />
                <img src={node} alt="logo node" />
                <img src='https://www.softwaredevelopersinc.com/images-2022/react-development.png' alt="logo react" />
                <img src={redux} alt="logo redux" />
                <img src={rtl} alt="logo rtl" />
              </div>
            </div>
            <div className='aboutInfo'>
              <h1>Desenvolvedor Front-end | Estudante de Engenharia de Softwate | CSS | JavaScript | React</h1>
            </div>
          </div>
        </div>
    );
  }
}

export default About;