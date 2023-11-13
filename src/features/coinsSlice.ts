import { createAsyncThunk, createSlice,PayloadAction } from "@reduxjs/toolkit"
import { Coin } from "../types/types"
import { url } from "../services/utils";


type Coins = {
    coins: Coin[]
    loading:boolean;
    error:string
}

const initialState:Coins= {
    coins: [],
    loading:false,
    error:''
}


export const fetchArticles = () =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json as Coin[])
    .then((fetchedCoins) => {
      const localStorageData = JSON.parse(localStorage.getItem('favoriteCoins') || '[]') as Coin[];
      const mergedCoins = fetchedCoins.map((fetchedCoin) => {
        const localStorageCoin = localStorageData.find(
          (lsCoin) => lsCoin.id === fetchedCoin.id
        );
        if (localStorageCoin) {
          fetchedCoin.isFavorite = localStorageCoin.isFavorite;
        } else {
          
          fetchedCoin.isFavorite = false;
        }

        return fetchedCoin;
      });

      return mergedCoins;
    });

export const fetchCoins = createAsyncThunk<Coin[]>("coins/fetchCoins", fetchArticles);


const coinsSlice = createSlice({
  name: "coins",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<string>) => {
      const index = state.coins.findIndex((a) => a.id === action.payload);
      if (index !== -1) {
        state.coins[index].isFavorite = !state.coins[index].isFavorite;
       
      }
      const isFavoriteArray = state.coins.filter(c => c.isFavorite === true)
      localStorage.setItem("favoriteCoins", JSON.stringify(isFavoriteArray));
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state, action) => {
        state.loading = true;
        state.error = "";
        state.coins = [];
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
        state.coins = [];
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.coins = action.payload;
      });
  },
});


export default coinsSlice.reducer;
export const {toggleFavorite} = coinsSlice.actions;