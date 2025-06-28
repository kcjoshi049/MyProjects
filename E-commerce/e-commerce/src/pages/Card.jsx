import { useContext } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Card = ({ element }) => {
  let {dark} = useContext(ShopContext);
  return (
    <li key={element._id}>
      <NavLink to={`/product/${element._id}`}>
        <div className={`flex flex-col gap-1 items-center lg:w-[13vw] ${dark?"":"bg-white text-black"}`}>
          <img
            src={element.image[0]}
            alt="img"
            className="sm:w-[200px] w-[40vw] h-auto rounded-[5px] hover:scale-105 transition ease-in-out mb-2"
          />
          <h3 className="lg:text-[17px] text-[15px]">{element.name}</h3>
          <div className="flex items-center self-start">
            <MdCurrencyRupee size={18} />
            <h3 className="text-[17px]">{element.price * 5}</h3>
          </div>
        </div>
      </NavLink>
    </li>
  );
};

export default Card;
