import React from 'react';
import Header from '../components/Header'
import './Home.css'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header/>  
        <div className='home'>            
            <h1>Home</h1>
        </div> 
        </div>
    );
  }
}

export default Home;