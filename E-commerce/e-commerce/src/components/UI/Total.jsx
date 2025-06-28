import { ShopContext } from "../../context/ShopContext";
import { MdCurrencyRupee } from "react-icons/md";
import { useContext } from "react";
import Title from "./Title";

const Total = () => {
    let { delivery_fee, getAmmount } = useContext(ShopContext);
  return (
    <div className="w-[40vw] max-lg:w-[80vw]  max-lg:self-center max-lg:mt-10 flex flex-col justify-center gap-2.5 ">
        <Title text1={"CART"} text2={"TOTALS"} />
        <div className="flex flex-col gap-2.5">
          <div className={` flex justify-between items-center max-lg:w-[70vw]  w-[30vw] m-auto border-b border-white/10 pb-2 `}>
            <h1 className="text-[18px]">Subtotal</h1>
            <div className="flex items-center">
              <MdCurrencyRupee size={18} />
              <h1 className="text-[18px]">{getAmmount()}</h1>
            </div>
          </div>
          <div className=" flex justify-between items-center max-lg:w-[70vw] w-[30vw] m-auto border-b border-white/10 pb-2">
            <h1 className="text-[18px]">Shipping Fee</h1>
            <div className="flex items-center">
              <MdCurrencyRupee size={18} />
              <h1 className="text-[18px]">{delivery_fee}</h1>
            </div>
          </div>
          <div className="flex justify-between max-lg:w-[70vw] w-[30vw] m-auto border-b border-white/10 pb-2">
            <h1 className="text-[18px] font-bold">Total</h1>
            <div className="flex items-center">
              <MdCurrencyRupee size={18} />
              <h1 className="text-[18px] font-bold">
                {delivery_fee + getAmmount()}
              </h1>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Total
