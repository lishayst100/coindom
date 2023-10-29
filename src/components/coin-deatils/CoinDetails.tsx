import {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import { CoinDetailsType } from '../../types/types'
import SingleCoin from './SingleCoin'
import { Circles } from 'react-loader-spinner'
import { baseUrl } from '../../services/utils'

const CoinDetails = () => {
    const {id} = useParams()
    const [coin, setCoin] = useState<CoinDetailsType>()
    const url = `${baseUrl}/coins/${id}`;
    useEffect(() => {
      const fecthData = async() => {
        const response = await fetch(url)
        if(!response.ok){
          throw new Error('Error')
        }
        const data = await response.json()
        setCoin(data)
      }
      fecthData()
    
      
    }, [])
    
  return (
    <div className='details-container flex'>
    {coin === undefined ? <Circles/> : <SingleCoin {...coin}/> }
    

    </div>
  )
}

export default CoinDetails