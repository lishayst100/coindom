import React from 'react'

const Titles = () => {
    const titles = ['Coin', 'Price','24h Change', 'Market Cap']
  return (
    <div className="row titles colorful-bgc py-4 rounded-top-5 mb-2">
      {titles.map((t) => (
        <span key={t} className="col text-center font-bolder">
          {t}
        </span>
      ))}
    </div>
  );
}

export default Titles