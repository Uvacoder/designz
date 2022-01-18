import React from 'react';
import people from '../../assets/people.png';
import SMLogo from '../../assets/SM-Logo1.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Create With SM-Designz.</h1>
      <p style={{ color: 'white' }}>At SM Designz, we create simple and iconic signature experiences, services and products. We help small businesses overcome their technical or design challenges by providing comprehensive solutions and support.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Inbox</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>3,265 people have had their visions made into reality.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={SMLogo} />
    </div>
  </div>
);

export default Header;
