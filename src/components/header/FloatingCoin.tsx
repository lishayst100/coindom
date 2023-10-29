import React from 'react'
type ImgProps = {
    src:string
}
const FloatingCoin = ({src}:ImgProps) => {
  return (
    <img
      src={src}
      alt="float"
      className="floating-coin"
    />
  );
}

export default FloatingCoin