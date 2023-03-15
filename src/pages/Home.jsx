import React from 'react';
import Header from '../components/Header'
import perfil from '../image/perfil2.JPG'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


class Home extends React.Component {
  render() {

    return (
      <div>
        <div className='home'> 
        <Header/>  
          <div className='textArea'>
            <h1>Olá!</h1>          
            <h2>Eu sou Leonardo Anzulin,</h2>
            <h2>Desenvolvedor Web Front-End.</h2>
            <h3>Bem-vindo ao meu portifólio : )</h3>
            <div className='linksProfile'>
              <Link to="/about" style={{textDecoration:"none"}}> Sobre mim </Link>
              <Link to="/projects" style={{textDecoration:"none"}}> Meus Projetos </Link>
            </div>
          </div> 
          <img className='perfilImage' src={perfil} alt="foto de perfil"/>
        </div> 
        </div>
    );
  }
}

export default Home;
