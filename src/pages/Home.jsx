import React from 'react';
import Header from '../components/Header'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
        <div className='home'>
            <Header/>  
            <h1>Home</h1>
        </div> 
    );
  }
}

export default Home;