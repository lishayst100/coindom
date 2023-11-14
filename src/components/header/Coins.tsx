import Coin from './Coin'
import {useAppSelector } from '../../app/hooks'
import {Circles} from 'react-loader-spinner'

const Coins = () => {
    const {coins,error,loading} = useAppSelector((s)=> s.coins)
   

    

  return (
    <div className='d-flex flex-wrap flex-column flex-lg-row justify-content-center align-items-center coins-container'>
        {loading && <Circles/>}
        {error && <p>Error</p>}
        {
            coins?.slice(0,4).map(coin => (
                <Coin {...coin} key={coin.id}/>
            ))
        }
    </div>
  )
}

export default Coins