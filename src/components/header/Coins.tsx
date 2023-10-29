import React, { useState,useEffect } from 'react'
import { url } from '../../services/utils'
import { Coin as CoinType } from '../../types/types'
import Coin from './Coin'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { fetchArticles, fetchCoins } from '../../features/coinsSlice'
import {Circles} from 'react-loader-spinner'

const Coins = () => {
    const [coinss, setCoins] = useState<CoinType[]>();
    const dispatch = useAppDispatch()
    const {coins,error,loading} = useAppSelector((s)=> s.coins)
   

    

  return (
    <div className='d-flex flex-wrap flex-column flex-lg-row justify-content-center align-items-center coins-container'>
        {loading && <Circles/>}
        {
            coins?.slice(0,4).map(coin => (
                <Coin {...coin} key={coin.id}/>
            ))
        }
    </div>
  )
}

export default Coins