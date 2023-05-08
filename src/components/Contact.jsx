import React from "react";
import styled from "styled-components";
import "./contact.css";
import {
  FaPhoneSquare,
  FaEnvelope
} from "react-icons/fa";

const ContactContainer = styled.section`
  padding:  40px;
  border: solid;
  background-color:black;
  text-align: center;
  margin-left: 400px;
  margin-right: 400px;
  box-sizing: border-box;
  border-radius: 6px;

  
`;

const ContactTitle = styled.h2`
  font-size: 3.5rem;
  margin-bottom: 20px;
  font-size: 30px;
    font-weight: 500;
    color:rgb(255, 0, 128);
    text-align: center;
    color: ;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-family: Arial, sans-serif;
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
  width:80%;
  height:300px; 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  text-align: left;
`;

const ContactInput = styled.input`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1.25rem;
    text-transform: uppercase;
    padding: 10px 20px;
`;

const ContactTextarea = styled.textarea`
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ccc;
  font-size: 1.25rem;
`;

const ContactButton = styled.button`
  padding: 10px 20px;
  background-color: #FF0080;
  color: #fff;
  font-size: 1.25rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;
const Set = styled.div`
text-align: center;
height: 10rem;
`;
const Commonheading = styled.h2`
font-size: 40px;
    font-weight: bold;
    text-align: center;
    text-shadow: 2px 2px 0 #ccc;
    margin: 40px 0;
    letter-spacing: 2px;
    font-family: Arial, sans-serif;
`;

const Contact = () => {
  
  return (
    <div>

      <Commonheading>Feel Free to Contact!</Commonheading>
      
      
      
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15126.28620995241!2d73.92422475000001!3d18.59334505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c14df5c70e0d%3A0x2d19689e09e2fced!2sPhoenix%20Mall%20Washrooms!5e0!3m2!1sen!2sin!4v1658905192255!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>

        <ContactContainer>
<ContactTitle>Fill Details</ContactTitle>
          <ContactForm
            action="https://formspree.io/f/mgebroav"
            method="POST"
            className="contact-inputs">
            <ContactInput
              type="text"
              name="username"
              placeholder="username"
              autoComplete="off"
              required
            />

            <ContactInput
              type="email"
              name="Email"
              placeholder="Email"
              autoComplete="off"
              required
            />

            <ContactTextarea
              name="message"
              cols="30"
              rows="6"
              autoComplete="off"
              required></ContactTextarea>

            <ContactButton type="submit" value="send" >Send</ContactButton>
          </ContactForm>
          
      </ContactContainer>
      <Set>
            <li className="clit">
            <FaPhoneSquare className="contact" />
            <div className="app-contact">: +91 9307719167</div>
            </li>
            <li className="mlit">
            <FaEnvelope className="mail" />
            <div className="app-mail">:ranasejal2601@gmail.com</div>
            </li>
      </Set>
      
    </div>

    
  );
};

export default Contact;