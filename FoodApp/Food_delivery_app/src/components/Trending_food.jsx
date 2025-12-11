import { useContext } from 'react'
import FoodCard from './FoodCard'
import { userContext } from '../api/ContextApi'


const Trending_food = () => {
  let {food_data} = useContext(userContext)
  return (
    <div className='grid grid-cols-4 m-auto gap-10'>
      {
        food_data.map((elem) => {
          if(elem.isTrending){
            return (
                <FoodCard element={elem} key={elem.id}/>
            )
          }
          else{
            return;
          }
        })
      }
    </div>
  )
}

export default Trending_food
