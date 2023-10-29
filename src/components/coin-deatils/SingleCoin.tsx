import React from 'react'
import { CoinDetailsType } from '../../types/types'
import DOMPurify from "dompurify";
import './CoinDetails.scss'
import PriceChange from './PriceChange';

const SingleCoin = ({
  description,
  image,
  market_cap_rank,
  market_data,
  name,
  symbol,

}: CoinDetailsType) => {
  const priceChange24h = market_data.price_change_percentage_24h
  const priceChange7d = market_data.price_change_percentage_7d
  return (
    <div className="flex container gap-4 flex-column mx-auto pt-4">
      <div className="flex flex-column gap-3">
        <img src={image.large} alt={name} className="" />
        <h3 className="m-0 p-0">{name}</h3>
        <span>Rank #{market_cap_rank}</span>
      </div>
      <div className="d-flex flex-column gap-4">
        <div className="flex gap-3 font-bolder text-bigger flex-column flex-lg-row">
          <span>Symbol: {symbol}</span>
          <PriceChange price={priceChange24h} text={"%"} title="24h Update: " />
          <PriceChange price={priceChange7d} text={"%"} title="7d Update:  " />
          <PriceChange
            price={market_data.current_price.usd}
            text={"$"}
            title="Price: "
          />
        </div>

        <p
          className="description"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(description ? description.en : ""),
          }}
        ></p>
      </div>
    </div>
  );
};

export default SingleCoin