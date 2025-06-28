
import LatestCollection from '../components/UI/LatestCollection'
import BestSellers from '../components/UI/BestSellers'
import Ourpolicy from '../components/UI/Ourpolicy'
import Subscribe from '../components/UI/Subscribe'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'

const Home = () => {
  let {dark} = useContext(ShopContext);
  return (
    <div className={`${dark?"bg-black text-white":"bg-white text-black"}`}>
      <LatestCollection />
      <BestSellers />
      <Ourpolicy/>
      <Subscribe/>
    </div>
  )
}

export default Home
