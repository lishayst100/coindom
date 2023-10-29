import { Route, Routes } from "react-router-dom";
import "./App.css";
import CoinDetails from "./components/coin-deatils/CoinDetails";
import Home from "./page/Home";
import SearchResults from "./components/search/SearchResults";
import FavoriteCoins from "./components/favorite-coins/FavoriteCoins";
import { useAppDispatch } from "./app/hooks";
import { useEffect } from "react";
import { fetchCoins } from "./features/coinsSlice";






function App() {

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchCoins());
  }, [dispatch]);

  return (
    <div className="dark">
      <Routes>
        <Route path="/coin/:id" element={<CoinDetails/>}/>
        <Route path="/search/:search" element={<SearchResults/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/favoriteCoins" element={<FavoriteCoins/>}/>
      </Routes>
    </div>
  );
}


export default App;

