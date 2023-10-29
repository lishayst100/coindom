import React from 'react'
import { useAppSelector } from '../../app/hooks'
import Coin from '../header/Coin'

const FavoriteCoins = () => {
    const {coins} = useAppSelector((s)=> s.coins)
    const favoriteCoins = coins.filter(c => c.isFavorite)

    
    
  return (
    <div className='flex gap-4 flex-lg-row flex-column pt-5'>
        {favoriteCoins.length === 0 ? <p>No Favorite Coins Yet</p>:
        
            favoriteCoins.map(c => (
                <Coin key={c.id} {...c}/>
            ))
        }
    </div>
  )
}

export default FavoriteCoins