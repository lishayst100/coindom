import React from "react";
import FloatingCoin from "../header/FloatingCoin";

const Title = () => {
  return (
    <div>
      <h1 className="text-light font-bolder title text-center">
        <FloatingCoin src="https://res.cloudinary.com/dlkhrcm4x/image/upload/v1751886445/bitcoin_nakzru.png" />
        JOIN US VIA
        <FloatingCoin src="https://res.cloudinary.com/dlkhrcm4x/image/upload/v1751886445/bitcoin_nakzru.png" />
        <br />
        <span className="colorful-text">DISCORD</span>
      </h1>
      <h5 className="text-center">
        Invest and manage all your crypto at one place.
      </h5>
    </div>
  );
};

export default Title;
