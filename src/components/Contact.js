

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9ov1bsl', 'template_kwakcvw', form.current, 'fxW1ZBscVeTu5kt5S')
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <StyledContactForm>
      
      <div className="contact"> 
      <h1>Contact</h1>
      <div className="con-1">
        
        
      <br></br>
      <br></br>
      <form ref={form} onSubmit={sendEmail}>
        <label>Name :</label>
        <input type="text" name="user_name" />
        <br></br>
        <br></br>
        <label>Email :</label>
        <input type="email" name="user_email" />
        <br></br>
        <br></br>
        <label>Message</label>
        <textarea name="message" />
        <br/>
        <input type="submit" value="Send" />
      </form>
      </div>
      </div>
    </StyledContactForm>
  );
};

 export default Contact;

// Styles
const StyledContactForm = styled.div`
 

// `;