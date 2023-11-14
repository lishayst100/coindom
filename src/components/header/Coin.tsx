import { AiFillHeart, AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineHeart } from "react-icons/ai";
import {useNavigate} from 'react-router-dom'
import { useAppDispatch } from "../../app/hooks";
import { toggleFavorite } from "../../features/coinsSlice";
type CoinProps = {
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  id:string;
  isFavorite:boolean
};

const Coin = ({current_price,image,name,price_change_percentage_24h,id,isFavorite}:CoinProps) => {
    const price_change = price_change_percentage_24h.toFixed(5)
    const nav = useNavigate()
    const dispatch = useAppDispatch()
  return (
    <div className="text-light coin-container font-bolder d-flex flex-column justify-content-center align-items-center gap-2">
      <img
        src={image}
        className="coin-img"
        alt={name}
        onClick={() => {
          nav(`/coin/${id}`);
        }}
      />
      <span className="flex gap-2">
        <span>{name} </span>
        <span
          onClick={() => {
            dispatch(toggleFavorite(id));
          }}
        >
          {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
      </span>

      {Number(price_change) > 1 ? (
        <span className="text-success">
          {price_change}%
        </span>
      ) : (
        <span className="text-danger">
          {price_change}%
        </span>
      )}

      <span>${current_price.toFixed(2)}</span>
    </div>
  );
}

export default Coin