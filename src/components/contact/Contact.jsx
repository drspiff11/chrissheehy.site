import "./contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () =>{
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1gbj119', 'template_odkn6ib', form.current, 'maTVx8KlYRUjuqnD4')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };
    return (
    <>

    <section className="contact">

      <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <br></br>
          <label>Email</label>
          <input type="email" name="user_email" />
          <br></br>
          <label>Message</label>
          <textarea name="message" />
          <br></br>
          <input type="submit" value="Send" id="submit"/>
      </form>

    </section>
      
    </>
    );
  }
  export default Contact;