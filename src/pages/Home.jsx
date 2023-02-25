import React from 'react';
import Header from '../components/Header'
import perfil from '../image/perfil2.JPG'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>  
        <div className='home'> 
          <div className='textArea'>
            <h1>Olá!</h1>          
            <h2>Eu sou Leonardo Anzulin,</h2>
            <h2>Desenvolvedor Web Front-End.</h2>
            <h3>Bem-vindo ao meu portifólio : )</h3>
          </div> 
          <img className='perfilImage' src={perfil} alt="foto de perfil"/>
        </div> 
        </div>
    );
  }
}

export default Home;
