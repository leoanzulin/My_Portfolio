import React from 'react';
import Header from '../components/Header'
import './About.css'
import node from '../image/node.png'
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
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg' alt="Logo HTML" />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg' alt="Logo CSS" />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg' alt="logo BootStrap" />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg' alt="logo JS" />
                <img src={node} alt="logo node" />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg' alt="logo react" />
                <img src={rtl} alt="logo rtl" />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg' alt="logo redux" />
                <img src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg' alt="Logo Figma" />
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