import React from 'react'
import { NavLink } from 'react-router-dom';

const NoCoins = () => {
  return (
    <div className="d-flex flex-column text-center">
      <p>No Favorite Coins Yet</p>
      <NavLink to={"/"}>Click Here to return to Home Page</NavLink>
    </div>
  );
}

export default NoCoins