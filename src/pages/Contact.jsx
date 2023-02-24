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
              <div>
            <h4>Fale comigo:</h4>              
              <form onSubmit={this.handleSubmit} className='contactForm'>
                {isSended ? <h4>Obrigado pelo contato!</h4> :
                (<>
                    
                    <input required min={3} name="nome" placeholder="Nome" />
                    <input required name="email" placeholder="E-mail" />
                    <input required min={3} name="assunto" placeholder="Assunto" />
                    <textarea required min={3} name="mensagem" rows="4" placeholder="Sua mensagem..." />
                    <button type="submit">Enviar</button>
                </>)}
              </form> 
              </div>
              <div className='socialMidias'>
                <h4>Redes sociais:</h4>               
                <button onClick= {()=>{window.open("https://www.linkedin.com/in/leoanzulin/",
              "_blank")}}>{<img className='socialLogo' src='https://www.vectorlogo.zone/logos/linkedin/linkedin-ar21.svg' alt="Logo LinkeDin" />}</button>
                <button onClick= {()=>{window.open("https://github.com/leoanzulin",
              "_blank")}}>{<img className='LogoGitHub' src='https://cdn-icons-png.flaticon.com/512/25/25231.png' alt="Logo GitHub" />}GitHub</button>
                <button onClick= {()=>{window.open("https://wa.me/5516993464300",
              "_blank")}}>{<img className='socialLogo' src='https://vetores.org/d/whatsapp.svg' alt='Logo WhatsApp'/>}</button>
              </div>
            </div>
        </div>
    );
  }
}

export default Contact;