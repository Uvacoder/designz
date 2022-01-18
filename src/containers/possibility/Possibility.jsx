import React from 'react';
import possibilityImage from '../../assets/Sam-1.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Meet The Owner</h4>
      <h1 className="gradient__text">Samkelisiwe Mthombeni</h1>
      <p>Passionate about helping clients bring their brands to life and telling their stories visually. Intends for SM-Designz to capture a brand&apos;s personality by developing comprehensive and compelling brand identities and designs. </p>
      <h4>Anything is Possible.</h4>
    </div>
  </div>
);

export default Possibility;
