import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Experienced design professionals',
    text: 'Established in 2017 you will benefit from years of experience.',
  },
  {
    title: 'Your end goal and brand in mind',
    text: 'We are committed to creating world class marketing pieces with your end goal in mind.',
  },
  {
    title: 'Colour psychology',
    text: 'To help you outsell your competition, our designers are trained in colour psychology and the dramatic effect it has on sales.',
  },
  {
    title: 'Research your industry',
    text: 'To ensure the best possible results for your business, we will research your industry, trends and target market before commencing a project.',
  },
  {
    title: 'Fast, reliable and on time service',
    text: 'You can always depend on us for fast, reliable, on time service.',
  },
  {
    title: 'No hidden surprises',
    text: 'All designers are trained to work within budget to ensure no hidden surprises.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading"><p>Why Us Actually?</p>
      <h1 className="gradient__text">Graphic design is personal. What appeals to you may not appeal to someone else, and so you want a company you know will listen to your ideas to produce logos, packaging, stationery and more.<br /> <br />You need an agency that offers 100 percent personalized designs, which fit your company identity. You can count on SM-Designz to meet all your graphic design needs.
      </h1>
      <p> </p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
