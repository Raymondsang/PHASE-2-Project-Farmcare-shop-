import React from 'react'

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-item">
        <button type="button" className="contact-button">Email</button>
      </div>
      <div className="contact-item">
        <p>Mobile: +2547123456789</p>
      </div>
      <div className="contact-item">
        <a href="mailto:example@example.com" className="contact-link">Send us an email</a>
      </div>
    </div>
  );
};

export default Contact