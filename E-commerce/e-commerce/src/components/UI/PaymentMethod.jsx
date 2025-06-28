import { useContext } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { ShopContext } from "../../context/ShopContext";

const PaymentMethod = () => {
  let {dark} = useContext(ShopContext)
  return (
    <div>
      <div className="flex justify-center items-center gap-1.5 mb-[15px] mt-[15px] ">
        <p className={`w-[100px] max-lg:w-[50px] h-[3px]  rounded-2xl ${dark?"bg-gray-400":"bg-black/70"}`}></p>
        <p className="text-[20px]">
          <span className={` ${dark?"text-gray-50":"text-black"}`}>PAYMENT</span>{" "}
          <span className={` ${dark?"text-gray-400":"text-black/70"}`}>METHOD</span>
        </p>
        <p className={`w-[100px] max-lg:w-[50px] h-[3px]  rounded-2xl ${dark?"bg-gray-400":"bg-black/70"}`}></p>
      </div>
      <div className="flex gap-5">
        <button className={`pl-10 pr-10 pb-1.5 pt-2.5 ${dark?"border-white/10":"border-black/30"} border-1 cursor-pointer`}>
            <img src={assets.stripe_logo} alt="img" className="w-14"/>
        </button>
        <button className={`pl-4 pr-4 pb-1.5 pt-2.5 ${dark?"border-white/10":"border-black/30"} border-1 cursor-pointer`}>
            <img src={assets.razorpay_logo} alt="img" />
        </button>
        <button className={`pl-2.5 pr-2.5 pb-1.5 pt-2.5 border-1 cursor-pointer ${dark?"border-white/10":"border-black/30"}`}>
            <h1>CASH ON DELIVERY</h1>
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
