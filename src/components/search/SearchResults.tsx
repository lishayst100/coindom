import {useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { baseUrl } from '../../services/utils';
import { CoinSearch } from '../../types/types';

const SearchResults = () => {
    const [data, setData] = useState<CoinSearch[]>()
    const {search} = useParams()
    const nav = useNavigate()
    const searchUrl  = `${baseUrl}/search?query=${search}`;
    useEffect(()=>{
        const handleSearch = async()=>{
            const response = await fetch(searchUrl)
            if(!response.ok){
                throw new Error('Error')
            }
            const result = await response.json()
            setData(result.coins)
            
        }
        handleSearch()
    })
    if(!data){
        return <p>Loading...</p>
    }

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Search Results for {search}
      {data.length === 0 ? (
        <h2>No Results Found For {search}</h2>
      ) : (
        <div className="row container mx-auto gap-4  justify-content-center align-items-center">
          {data.map((c) => (
            <div
              key={c.id}
              className="col-3 gap-3 d-flex flex-column justify-content-center align-items-center"
              onClick={() => {
                nav(`/coin/${c.id}`);
              }}
            >
              <h4 className='text-center'>{c.name}</h4>
              <img src={c.large} alt="..." className="img-fluid" />
              <p>Rank - #{c.market_cap_rank}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults