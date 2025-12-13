import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../api/ContextApi";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const Product = () => {
  let { productId } = useParams();
  productId = Number(productId);
  let { food_data, icon } = useContext(userContext);
  let currentItem = food_data?.find((elem) => {
    return elem.id === productId;
  });
  // for fav section 
  let [fav, setFav] = useState(false);
  // 

  if (food_data.length !== 0) {
    return (
      <div className="w-[60vw] m-auto p-10 my-10 flex flex-col gap-5 bg-white" style={{fontFamily : "Ubuntu"}}>
        {/* this div is for tags and fav icon */}
        <div className="flex justify-between items-center w-[40vw] ml-10">
          <ul className="flex justify-center gap-7 list-disc">
            {
              currentItem.tags.map((elem)=>{
                return (
                  <li>{elem}</li>
                )
              })
            }
          </ul>
          <FaRegHeart size={25} onClick={()=>{fav?setFav(false):setFav(true)}} className={`${fav?"hidden":""} cursor-pointer`}/>
          <FaHeart size={25} onClick={()=>{fav?setFav(false):setFav(true)}} className={`${fav?"":"hidden"} cursor-pointer text-red-600`}/>
        </div>
        {/* this section is for image and other details */}
        <div className="flex gap-10">
          {/* this is image */}
          <div className="flex justify-center items-center bg-linear-to-r from-black/10 via-black/20 to-black/40 p-10 w-[20vw] rounded-xl">
            <img src={currentItem.images.thumbnail} alt={currentItem.name}/>
          </div>
          {/* this is the section for other details of the food item */}
          <div className="flex flex-col gap-3 w-[20vw]">
            <h1 className="text-3xl font-medium ">{currentItem.name}</h1>
            {/* category and rating section */}
            <div className="flex items-center gap-10">
              <h1 className="text-red-600">{currentItem.category}</h1>
              <div className="flex gap-1 items-center">
              <icon.emptyStar size={15} className="text-yellow-700"/>
              {currentItem.rating}
              </div>
            </div>
            {/* price and discount field */}
            <div className="flex gap-20">
              <h1 className="font-medium text-2xl">&#8377;{currentItem.finalPrice}</h1>
              <div className="flex items-center gap-3">
                <s className="font-medium text-black/50">&#8377;{currentItem.price}</s>
                <h2 className="font-medium text-red-600">{currentItem.discount}%  OFF</h2>
              </div>
            </div>
            {/* product description section */}
            <p className="text-[17px] font-medium">{currentItem.description}</p>
            {/* nutrition section for each product */}
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h1 className="font-medium text-xl">Nutrition</h1>
                <h4>per serving</h4>
              </div>
              <div className="flex justify-between">
                <div>Calories :- {currentItem.nutrition.calories}</div>
                <div>Protein :- {currentItem.nutrition.protein}</div>
              </div>
              <div className="flex justify-between">
                <div>Fat :- {currentItem.nutrition.fat}</div>
                <div>Carbs :- {currentItem.nutrition.carbs}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  else {
    return <div>Loading...</div>
  }
};

export default Product;
