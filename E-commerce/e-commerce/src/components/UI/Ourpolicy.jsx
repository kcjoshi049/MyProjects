import { RiExchangeFundsLine } from "react-icons/ri";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { RiCustomerServiceFill } from "react-icons/ri";

const Ourpolicy = () => {
  return (
    <div className='flex flex-col lg:flex-row w-[90vw] m-auto items-center mb-5 gap-10 mt-5 lg:gap-0'>
      <div className='w-[90vw] lg:w-[30vw] flex flex-col items-center'>
        <RiExchangeFundsLine size={50} className='mb-2.5'/>
        <h3 className="font-bold">Easy Exchange Policy</h3>
        <p>We Offer hassle free exchange policy</p>
      </div>
      <div className='w-[90vw] lg:w-[30vw] flex flex-col items-center'>
        <RiVerifiedBadgeFill size={50} className='mb-2.5'/>
        <h3 className="font-bold">7 Days Return Policy</h3>
        <p>We provide 7 days free ruturn policy</p>
      </div>
      <div className='w-[90vw] lg:w-[30vw] flex flex-col items-center'>
        <RiCustomerServiceFill size={50} className='mb-2.5'/>
        <h3 className="font-bold">Best Customer Support</h3>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
  )
}

export default Ourpolicy
