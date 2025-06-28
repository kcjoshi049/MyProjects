import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Title = ({text1, text2}) => {
  const {dark} = useContext(ShopContext);
  return (
    <div className='flex justify-center items-center gap-1.5 mb-[15px] mt-[15px]'>
      <p className={`w-[50px] sm:w-[100px] h-[2px] sm:h-[3px] ${dark?"bg-gray-400":"bg-black/70"} rounded-2xl`}></p>
      <p className='lg:text-2xl text-[20px]'><span className={`${dark?"text-gray-50":"text-black"}`}>{text1}</span> <span className={`${dark?"text-gray-400":"text-black/70"}`}>{text2}</span></p>
      <p className={`w-[50px] sm:w-[100px] h-[2px] sm:h-[3px]  rounded-2xl ${dark?"bg-gray-400":"bg-black/70"}`}></p>
    </div>
  )
}

export default Title
