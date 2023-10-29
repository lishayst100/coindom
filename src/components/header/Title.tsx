import React from 'react'
import FloatingCoin from './FloatingCoin';

const Title = () => {
  return (
    <h1 className="text-light font-bolder title text-center">
      <FloatingCoin src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png" />
      TRACK AND TRADE
      <FloatingCoin src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png" />
      <br />
      <span className="colorful-text">CRYPTO CURRENCIES</span>
    </h1>
  );
}

export default Title