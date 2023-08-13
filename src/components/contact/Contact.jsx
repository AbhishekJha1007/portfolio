import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";




const Contact = () => {
  const form = useRef();
  const [setCopySuccessMessage] = useState('')
  const [setInstructions] = useState('')

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_yoenolk', 'template_zpw8byv', form.current, 'Jtf9V98IJKsFmmx2G')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  function copyEmail() {
    navigator.clipboard.writeText('jha.abhishek1099@gmail.com')
    // setCopySuccessMessage(`jha.abhishek1099@gmail.com copied to clipboard`)
    // setInstructions('')
    // window.open('mailto:jha.abhishek1099@gmail.com')
  }


  return (
    <section className="contact container section" id="contact">
      <h2 className="section__title">Get In Touch</h2>

      <div className=" grid">
        <div className="contact__infor">
          <h3 className="contact__title">Let's connect !</h3>
          <p className="contact__details">Don't like filling forms? Send me an email.👋 &nbsp; 
          <a href="mailto:jha.abhishek1099@gmail.com" >jha.abhishek1099@gmail.com &nbsp; </a>
          <i onClick={copyEmail} className="fa-regular fa-copy pointer"></i> 
          </p>
          <br/>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact__form">
        <div className="contact__form-group">
          <div className="contact__form-div">
            <input type="text" id="user_name" name="user_name" className="contact__form-input" placeholder="Enter your name" />
          </div>

          <div className="contact__form-div">
            <input type="email" id="user_email" name="user_email" className="contact__form-input" placeholder="Enter your email" />
          </div>
        </div>

        <div className="contact__form-div">
          <input type="text" id="subject" name="subject" className="contact__form-input" placeholder="Enter your subject" />
        </div>

        <div className="contact__form-div contact__form-area">
          <textarea id="message" name="message" cols="30" rows="10" className="contact__form-input" placeholder="Write your message here!"></textarea>
        </div>

        <button type="submit" className="btn">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;