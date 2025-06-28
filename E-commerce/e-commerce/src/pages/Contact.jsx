import { NavLink } from 'react-router-dom'
import { assets } from '../assets/frontend_assets/assets'
import Title from '../components/UI/Title'
import Subscribe from '../components/UI/Subscribe'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Contact = () => {
  let {dark} = useContext(ShopContext);
  return (
    <div className='flex flex-col lg:gap-15 gap-10'>
      <Title text1={"CONTACT"} text2={"US"}/>
      <div className='w-fit m-auto flex max-lg:flex-col lg:gap-20 gap-10 items-center'>
        <img src={assets.contact_img} alt="contact" className='lg:w-[30vw] w-[80vw] rounded-2xl'/>
        <div className='flex flex-col gap-4 max-lg:pl-15'>
          <div className='flex flex-col gap-5'>
            <h1 className={`text-2xl font-semibold  ${dark?"text-white/70":"text-black/90"}`}>Our Store</h1>
            <div className='flex flex-col gap-1.5'>
              <h1 className={`text-[18px]  ${dark?"text-white/60":"text-black/90"}`}>54709 Willms Station</h1>
              <h1 className={`text-[18px] ${dark?"text-white/60":"text-black/90"} `}>Suite 350, Washington, USA</h1>
            </div>
            <div className='flex flex-col gap-1.5'>
              <h1 className={`text-[18px]  ${dark?"text-white/60":"text-black/90"}`}>Phone : 9756425653</h1>
              <h1 className={`text-[18px] ${dark?"text-white/60":"text-black/90"}`}>Email : kj144049@gmail.com</h1>
            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className={`text-2xl font-semibold  ${dark?"text-white/70":"text-black/90"}`}>Careers at Shopsphare</h1>
            <h1 className={`text-[18px] ${dark?"text-white/60":"text-black/90"}`}>Learn more about our teams and job openings.</h1>
            <NavLink className={`flex justify-center  w-fit items-center ${dark?"hover:bg-white hover:text-black bg-white/10":"hover:bg-black hover:text-white bg-black/50"} pt-4 pb-4 pl-6 pr-6 transition ease-in delay-100`}> Explore Jobs</NavLink>
          </div>
        </div>
      </div>
      <Subscribe /> 
    </div>
  )
}

export default Contact
