import React from 'react';
import Header from '../components/Header'
import perfil from '../image/perfil.jpg'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>  
        <div className='home'> 
        <div>          
          <h1>Olá sou Leonardo Anzulin,</h1>
          <h1>Desenvolvedor Web Front-End.</h1>
          <h2>Bem-vindo ao meu portifolio</h2>
          </div> 
          <img className='perfilImage' src={perfil} alt="foto de perfil"/>
        </div> 
        </div>
    );
  }
}

export default Home;