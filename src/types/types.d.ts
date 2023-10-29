export type Coin = {
  id: string;
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap: number;
  isFavorite:boolean
}; 
export type CoinDetailsType = {
  id: string;
  name: string;
  image: { large: string };
  market_cap_rank: number;
  description: { en: string };
  market_data: {
    current_price: { usd: number };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
  };
  symbol: string;
}; 

export type CoinSearch = {
  id: string;
  name: string;
  symbol: string;
  market_cap_rank: number;
  large: string;
};
