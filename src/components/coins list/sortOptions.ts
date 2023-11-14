import { Coin } from "../../types/types";

export const sortOptions = [
  {
    text: "Most Popular",
    value: "default",
  },
  {
    text: "Price High To Low",
    value: "highToLow",
  },
  {
    text: "Price Low To High",
    value: "lowToHigh",
  },
  {
    text: "Most Decreased",
    value: "percentageLowToHigh",
  },
  {
    text: "Most Increased",
    value: "percentageHighToLow",
  },
  {
    text: "A-Z",
    value: "AtoZ",
  },
  {
    text: "Z-A",
    value: "ZtoA",
  },
];



export const getSortedCoins = (sortOrder:string,coins:Coin[]) => {
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
    return [...coins].sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === "ZtoA") {
    return [...coins].sort((a, b) => b.name.localeCompare(a.name));
  } else {
    return coins;
  }
};