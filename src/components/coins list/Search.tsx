import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Search = () => {
    const [searchCoin, setSearchCoin] = useState('')
    const nav =useNavigate()
    const handleSearch =() => {
            nav(`search/${searchCoin}`)
    }


  return (
    <div className="flex gap-3  flex-wrap">
      <label htmlFor="search" className="font-bolder text-bigger">
        Search For Coins:
      </label>
      <div>
        <input
          type="text"
          className="search-input"
          onChange={(e) => {
            setSearchCoin(e.target.value);
          }}
        />
        <button
          onClick={handleSearch}
          className="colorful-bgc rounded-3 px-3 py-2 font-bolder"
          disabled={searchCoin === "" ? true : false}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search