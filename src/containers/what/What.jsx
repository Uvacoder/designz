import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is SM-Designz" text="‘SM Designz’ represents considerable authority in Website Development, Graphic Design, and Social Media Solutions, all with a large number of alternatives to suit your necessities. " />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore our Services</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Graphic Designer" text="We offer clean, clear and unique print designs with your company's image in mind. Whether you are interested in creative logos, marketing brochures, newsletters, direct mail pieces, trade show displays or point-of-purchase designs, our professional and skilled graphic designers are here to create your vision - or the vision you didn't know you wanted until you saw it." />
      <Feature title="Web Designer" text="A picture is worth a thousand words and a well designed website can propel your business to new heights. An online, web and social media presence has become an essential part of business in order to grow, thrive and survive." />
      <Feature title="Screen Printing &amp; Embroidery" text="Our embroidery and screen printing services include a wide range of promotional &amp; branded products. Promote your brand and present a solid, professional group appearance with embroidered apparel and accessories. For a sleek, high quality finish that will stand the test of time, embroidery is a great option for customizing merchandise and apparel." />
    </div>
  </div>
);

export default WhatGPT3;
