import React, { useState, useEffect } from "react";
import { url } from "../../services/utils";
import { Coin } from "../../types/types";
import Titles from "./Titles";
import SingleCoin from "./SingleCoin";
import "./CoinsList.scss";
import CalculatePages from "./Example";
import { ColorRing } from "react-loader-spinner";
import Search from "./Search";
import { sortOptions } from "./sortOptions";
import SelectSort from "./SelectSort";
import { useAppSelector } from "../../app/hooks";

const CoinsList = () => {
  const [coinss, setCoins] = useState<Coin[]>();
  const [sortOrder, setSortOrder] = useState<string>("default"); // 'default' means no sorting
  const {coins,error,loading} = useAppSelector((s)=> s.coins)

/*   useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(`${url}`, {
          mode: "cors",
        });
        if (!response.ok) {
          console.log("Error");
        }
        const data = await response.json();
        const json = await data as Coin[]
        const coins = await json.forEach((c)=>{
          c.isFavorite = false
        })
        setCoins(coins);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCoins();
  }, []); */

/* useEffect(()=>{
  fetch(url)
  .then(res => res.json())
  .then(json => json as Coin[])
  .then(coins => coins.forEach(c => {
    c.isFavorite = false
  },
    setCoins(coins)
    
  ))
 
},[]) */


  if (!coins) {
    return <ColorRing />;
  }

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  const getSortedCoins = () => {
    if (sortOrder === "highToLow") {
      return [...coins].sort((a, b) => b.current_price - a.current_price);
    } else if (sortOrder === "lowToHigh") {
      return [...coins].sort((a, b) => a.current_price - b.current_price);
    } else if (sortOrder === "percentageLowToHigh") {
      return [...coins].sort(
        (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
      );
    } else if (sortOrder === "percentageHighToLow") {
      return [...coins].sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      );
    } else if (sortOrder === "AtoZ") {
      return [...coins].sort(
        (a, b) => a.name.localeCompare(b.name)
      );
    }else if (sortOrder === "ZtoA") {
      return [...coins].sort(
        (a, b) => b.name.localeCompare(a.name)
      );
    } else {
      return coins; // No sorting, return the original array
    }
  };

  const sortedCoins = getSortedCoins();

  

  return (
    <div className="container mx-auto" id="market">
      <div className="flex gap-3 py-5 flex-column flex-lg-row">
        <Search />
        <SelectSort
          handleSortChange={handleSortChange}
          sortArray={sortOptions}
        />
      </div>

      <Titles />
      <CalculatePages jsonData={sortedCoins} itemsPerPage={10} />
    </div>
  );
};

export default CoinsList;
