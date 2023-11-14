import { useAppSelector } from '../../app/hooks'
import Coin from '../header/Coin'
import NoCoins from './NoCoins'

const FavoriteCoins = () => {
    const {coins} = useAppSelector((s)=> s.coins)
    const favoriteCoins = coins.filter(c => c.isFavorite) 
    
    
  return (
    <div className="flex gap-4 flex-lg-row flex-column pt-5 favorite-container">
      {favoriteCoins.length === 0 ? (
        <NoCoins />
      ) : (
        <div className="d-flex gap-3 flex-column">
          <h2 className='text-center'>Your Favorite Coins</h2>
          <div className='d-flex gap-4 flex-wrap flex flex-lg-row flex-column'>
            {favoriteCoins.map((c) => (
              <Coin key={c.id} {...c} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default FavoriteCoins