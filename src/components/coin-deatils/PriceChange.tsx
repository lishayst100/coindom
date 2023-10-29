import React from 'react'
interface Props{
    price:number;
    text:string;
    title:string
}
const PriceChange = ({price,text,title}:Props) => {
  return (
    <span>
      {title}
      <span className={price > 1 ? "text-success" : "text-danger"}>
        {text}{price}
      </span>
    </span>
  );
}

export default PriceChange