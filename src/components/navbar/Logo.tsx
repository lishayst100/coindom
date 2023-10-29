import { AiFillPlayCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";


const Logo = () => {
    const nav = useNavigate()


  return <div onClick={()=>{nav('/')}} className="logo-div">
   COINDOM
  </div>;
}

export default Logo