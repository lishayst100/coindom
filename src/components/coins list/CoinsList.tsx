import React, { useState} from "react";
import Titles from "./Titles";
import "./CoinsList.scss";
import CalculatePages from "./Example";
import { ColorRing } from "react-loader-spinner";
import Search from "./Search";
import { getSortedCoins, sortOptions } from "./sortOptions";
import SelectSort from "./SelectSort";
import { useAppSelector } from "../../app/hooks";

const CoinsList = () => {
  const [sortOrder, setSortOrder] = useState<string>("default"); 
  const {coins,error,loading} = useAppSelector((s)=> s.coins)
  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(event.target.value);
  };

  
  const sortedCoins = getSortedCoins(sortOrder,coins);

  if(loading){
    return <ColorRing/>
  }

  if(error){
    return <p>Error</p>
  }

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
