import { CoinDetailsType } from "../types/types";

export const baseUrl = 'https://api.coingecko.com/api/v3'

export const url = `${baseUrl}/coins/markets?vs_currency=usd&order=market_cap_desc&page=1&sparkline=false`


export const fecthData = async (
  setCoin: React.Dispatch<React.SetStateAction<CoinDetailsType | undefined>>,
  url:string
) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Error");
  }
  const data = await response.json();
  setCoin(data);
};