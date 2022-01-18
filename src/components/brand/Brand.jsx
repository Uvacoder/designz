import React from 'react';
import { alexa, allblack, ballito, nala, qtech, zalana } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={alexa} width="422" height="130" />
    </div>
    <div>
      <img src={allblack} width="422" height="130" />
    </div>
    <div>
      <img src={ballito} width="422" height="130" />
    </div>
    <div>
      <img src={nala} width="422" height="130" />
    </div>
    <div>
      <img src={qtech} width="422" height="130" />
    </div>
    <div>
      <img src={zalana} width="422" height="130" />
    </div>
  </div>
);

export default Brand;
