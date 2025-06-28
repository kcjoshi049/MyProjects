import { NavLink } from "react-router-dom";
import Total from "../components/UI/Total";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";



const CartTotal = () => {
  let {dark} = useContext(ShopContext);
  return (
    <div className=" flex items-center justify-end flex-col ">
      <div className="w-[40vw] flex flex-col justify-center gap-2.5 ">
        <Total />
        <NavLink className={`flex justify-center items-center p-3 font-semibold w-[15vw] font-sans self-center mt-5 mb-5 cursor-pointer  max-lg:w-[80vw] ${dark?"bg-white text-black hover:bg-white/80":"bg-black text-white hover:bg-black/70"}`} to={"place-order"}>
            PROCEED TO CHECKOUT
        </NavLink>
        </div>
      </div>
  );
};

export default CartTotal;
