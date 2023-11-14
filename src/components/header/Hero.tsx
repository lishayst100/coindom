import React from 'react'
import './Hero.scss'
import Coins from './Coins';
import Title from './Title';

const Hero = () => {

  
 
  return (
    <div
      className="hero d-flex justify-content-center align-items-center flex-column"
      id="header"
    >
      <Title />
      <Coins />
    </div>
  );
}

export default Hero