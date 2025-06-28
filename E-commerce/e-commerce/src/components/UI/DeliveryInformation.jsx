import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "./Title";

const DeliveryInformation = () => {
  const { dark } = useContext(ShopContext);

  // Use border-black/50 for light theme
  const borderColor = dark ? "border-white/10" : "border-black/50";

  return (
    <div className="lg:w-[40vw] lg:ml-10 flex flex-col justify-center items-center w-[90vw]">
      <Title text1={"DELIVERY"} text2={"INFORMATION"} />
      <form className=" lg:w-[30vw] flex flex-col gap-5 mt-2.5 mb-2.5 w-[90vw]" action="">
        <div className=" flex justify-between max-lg:w-[90vw]">
          <input type="text" placeholder="First Name" className={`${borderColor} pt-1.5 pb-1.5 pl-2.5 border-2 lg:w-[13vw] w-[42vw]`} required/>
          <input type="text" placeholder="Last Name" className={`pt-1.5 pb-1.5 pl-2.5 border-2 ${borderColor} lg:w-[13vw] w-[42vw]`} required/>
        </div>
        <div className="">
          <input type="email" placeholder="Email address" className={`pt-1.5 pb-1.5 pl-2.5 border-2 ${borderColor} w-[30vw] max-lg:w-[90vw]`} required/>
        </div>
        <div className="">
          <input type="text" placeholder="Street" className={`pt-1.5 pb-1.5 pl-2.5 border-2 ${borderColor} w-[30vw] max-lg:w-[90vw]`} required/>
        </div>
        <div className="flex justify-between">
          <input type="text" placeholder="City" className={`${borderColor} pt-1.5 pb-1.5 pl-2.5 border-2 lg:w-[13vw] w-[42vw]`} required/>
          <input type="text" placeholder="State" className={`${borderColor} pt-1.5 pb-1.5 pl-2.5 border-2 lg:w-[13vw] w-[42vw]`} required/>
        </div>
        <div className="flex justify-between">
          <input type="text" placeholder="Zipcode" className={`${borderColor} pt-1.5 pb-1.5 pl-2.5 border-2 lg:w-[13vw] w-[42vw]`} required/>
          <input type="text" placeholder="Country" className={`${borderColor} pt-1.5 pb-1.5 pl-2.5 border-2 lg:w-[13vw] w-[42vw]`} required/>
        </div>
        <div className="">
          <input type="number" placeholder="Phone" className={`${borderColor} pt-1.5 pb-1.5 pl-2.5 border-2 lg:w-[30vw]   w-[90vw]`} required/>
        </div>
        <button type="submit" className={`pt-3 pb-3 w-fit self-center pl-6 pr-6 text-[15px] font-semibold cursor-pointer ${dark?"text-white/70 bg-white/20 lg:bg-white/5":"text-black/70 lg:bg-black/30 bg-black/20"}`}>PLACE ORDER</button>
      </form>
    </div>
  );
};

export default DeliveryInformation;
