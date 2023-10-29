import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useAppDispatch } from "../../app/hooks";
import { toggleFavorite } from "../../features/coinsSlice";
type CoinProps = {
  name: string;
  image: string;
  current_price: number;
  price_change_percentage_24h: number;
  market_cap:number;
  id:string
  isFavorite:boolean
};

const SingleCoin = ({
  current_price,
  image,
  name,
  price_change_percentage_24h,
  market_cap,
  id,
  isFavorite

}: CoinProps) => {
  const formattedMarketCap = market_cap.toLocaleString("en-US");
  const nav = useNavigate()
  const dispatch = useAppDispatch()
  return (
    <div className="text-light font-bolder row p-3 d-flex align-items-center justify-content-center text-bigger-list">
      <div className="col d-flex gap-1 align-items-center flex-column">
        <img
          src={image}
          className="coins-img"
          alt="..."
          onClick={() => {
            nav(`/coin/${id}`);
          }}
        />
        <span className="text-center">{name}</span>
      </div>

      <span className="col text-center">$ {current_price}</span>
      <span
        className={`col text-center ${
          price_change_percentage_24h > 1 ? "text-success" : "text-danger"
        }`}
      >
        {price_change_percentage_24h}%
      </span>
      <span className="col text-center">$ {formattedMarketCap}</span>
      <span
        className=""
        onClick={() => {
          dispatch(toggleFavorite(id));
        }}
      >
        {isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
      </span>
      <hr />
    </div>
  );
};

export default SingleCoin;
