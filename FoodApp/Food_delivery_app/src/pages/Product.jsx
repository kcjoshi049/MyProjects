import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../api/ContextApi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import ProductCard from "../components/productCard";

const Product = () => {
  let { productId } = useParams();
  productId = Number(productId);
  let { food_data } = useContext(userContext);
  let currentItem = food_data?.find((elem) => {
    return elem.id === productId;
  });
  // for fav section 
  let [fav, setFav] = useState(false);
  // 

  if (food_data.length !== 0) {
    return (
      <div className="w-[60vw] items-center m-auto p-10 my-10 flex flex-col gap-5 bg-white" style={{fontFamily : "Ubuntu"}}>
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
          {
            fav?(
              <FaHeart size={25} onClick={()=>{fav?setFav(false):setFav(true)}} className="cursor-pointer text-pink-700"/>
            ):(
              <FaRegHeart size={25} onClick={()=>{fav?setFav(false):setFav(true)}} className="cursor-pointer" />
            )
          }
        </div>
        {/* this section is for image and other details */}
        <div className="flex gap-10">
          {/* this is image */}
          <div className="flex justify-center items-center bg-linear-to-r from-black/10 via-black/20 to-black/40 p-10 w-[20vw] rounded-xl object-contain">
            <img src={currentItem.images.thumbnail} alt={currentItem.name} className="w-full h-full object-cover"/>
          </div>
          {/* this is the section for other details of the food item */}
          <ProductCard currentItem={currentItem}/>
        </div>
      </div>
    )
  }
  else {
    return <div>Loading...</div>
  }
};

export default Product;
