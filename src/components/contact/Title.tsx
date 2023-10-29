import React from "react";
import FloatingCoin from "../header/FloatingCoin";

const Title = () => {
  return (
    <div>
      <h1 className="text-light font-bolder title text-center">
        <FloatingCoin src="https://coindom-crypto-search.vercel.app/static/media/bitcoin.e146d46fb598ae0d8f43.png" />
        JOIN US VIA
        <FloatingCoin src="https://coindom-crypto-search.vercel.app/static/media/ethereum.c6cffe78f0c6abc85da9.png" />
        <br />
        <span className="colorful-text">DISCORD</span>
      </h1>
      <h5 className="text-center">Invest and manage all your crypto at one place.</h5>
    </div>
  );
};

export default Title;
