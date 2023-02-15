import React from 'react';
import Header from '../components/Header'
import './Contact.css'

class Contact extends React.Component {
  render() {
    return (
        <div>
            <Header/>
            <div className='contact'>
              <h1>Contact</h1>
            </div>
        </div>
    );
  }
}

export default Contact;