import React from 'react';
import Header from '../components/Header'
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import node from '../image/node.png'
import rtl  from '../image/rtl.png'
class About extends React.Component {
  render() {
    return (
        <div>
          <Header/>
          <div className='about'>
            <div className='skills'>
              <h1>Skills</h1>
              <div className='logoImagens'>
                <img className='deg4' src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg' alt="Logo HTML" />
                <img className='deg2' src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg' alt="Logo CSS" />
                <img className='deg3' src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg' alt="logo BootStrap" />
                <img className='center' src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg' alt="logo JS" />
                <img className='deg5' src={node} alt="logo node" />
                <img className='deg6' src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg' alt="logo react" />
                <img className='deg1' src={rtl} alt="logo rtl" />
                <img className='deg7' src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg' alt="logo redux" />
                <img className='deg8' src='https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg' alt="Logo Figma" />
              </div>
            </div>
            <div className='aboutMe'>
              <h1>Sobre mim</h1>
              <div className='aboutInfo'>
                <p>Tenho 26 anos, resido em São Carlos no interior de São Paulo, sou apaixonado por tecnologia, viagens e esportes.<br/><br/> Sou desenvolvedor Web Front-End em processo de transição de carreira, venho da área metal-mecânica onde eu exercia a função de técnico mecânico/Projetista.<br/><br/> Hoje curso Engenharia de Software na universidade Estácio de Sá e Desenvolvimento Web full-stack na escola de programação Trybe.<br/><br/> Durante a minha formação na Trybe pude desenvolver diversos projetos individuais e em grupo, onde aprendi e desenvolvi habilidades de hard skills com as seguintes tecnologias: HTML, CSS, JavaScript, BootStrap, Node, React, Redux, ReactTestLibary e Figma, além de soft skills como comunicação, trabalho em equipe e inteligência emocional.</p>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default About;