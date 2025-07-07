import React from 'react'
import FloatingCoin from './FloatingCoin';

const Title = () => {
  return (
    <h1 className="text-light font-bolder title text-center">
      <FloatingCoin src="https://res.cloudinary.com/dlkhrcm4x/image/upload/v1751886445/bitcoin_nakzru.png" />
      TRACK AND TRADE
      <FloatingCoin src="https://res.cloudinary.com/dlkhrcm4x/image/upload/v1751886445/bitcoin_nakzru.png" />
      <br />
      <span className="colorful-text">CRYPTO CURRENCIES</span>
    </h1>
  );
}

export default Title