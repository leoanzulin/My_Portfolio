import React from 'react';
import emailJs from '@emailjs/browser';
import Header from '../components/Header'
import './Contact.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Contact extends React.Component {
  state = {
    isSended: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const params = {
        from_name: e.target[0].value,
        email: e.target[1].value,
        assunto: e.target[2].value,
        message: e.target[3].value,
    };

    emailJs.send(
        'service_8p9ju2g',
        'template_7x293tc',
        params,
        'BG7-zW73OQ2FYpkQl',
    );
    this.setState({
      isSended: true,
    })      
};
  render() {
    const { isSended } = this.state;
    return (
        <div>
            <Header/>
            <div className='contact'>              
              <form onSubmit={this.handleSubmit} className='contactForm'>
                {isSended ? <h4>Obrigado pelo contato!</h4> :
                (<>
                    <h4>Fale comigo:</h4>
                    <input required min={3} name="nome" placeholder="Nome" />
                    <input required name="email" placeholder="E-mail" />
                    <input required min={3} name="assunto" placeholder="Assunto" />
                    <textarea required min={3} name="mensagem" rows="4" placeholder="Sua mensagem..." />
                    <button type="submit">Enviar</button>
                </>)}
              </form> 
              <div className='socialMidias'>
                <h1>social midias</h1>               
                <button onClick= {()=>{window.open("https://www.linkedin.com/in/leoanzulin/",
              "_blank")}}>LinkeDin</button>
                <button onClick= {()=>{window.open("https://github.com/leoanzulin",
              "_blank")}}>GitHub</button>
                <button onClick= {()=>{window.open("https://wa.me/5516993464300",
              "_blank")}}>WhatsApp</button>
              </div>
            </div>
        </div>
    );
  }
}

export default Contact;