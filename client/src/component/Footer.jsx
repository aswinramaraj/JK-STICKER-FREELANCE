import React from 'react'
import './cssfile/footer.css'
import axios from 'axios';



import  { useState } from 'react';


const Footer = () => {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [message,setmessage] = useState('')

 


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:4000/contact', {name,email,message});
      console.log(res.data); // Handle the response as needed
    } catch (error) {
      console.error('There was an error!', error);
    }
  };
  

  return (
    <footer className="footer" id='foot'>
      <div className="footer-content">
        <div className="contact-form">
          <h3>Contact Us</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 JK Sticker. All rights reserved.</p>
          <p>Follow us on social media:</p>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;