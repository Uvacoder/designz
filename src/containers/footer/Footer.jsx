import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">If you&apos;d like to discuss your project needs, we&apos;d love to hear from you.</h1>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <p>Address, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>WhatsApp</p>
        <p>Instagram</p>
        <p>LinkedIn</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Address</p>
        <p>Contact Details</p>
        <p>emailaddress</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 SM-Designz. All rights reserved. <br /> <br /> Website created by Antive Development. </p>
    </div>
  </div>
);

export default Footer;
