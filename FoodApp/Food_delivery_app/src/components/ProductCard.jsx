import { useContext } from "react";
import { userContext } from "../api/ContextApi";
import { GoDotFill } from "react-icons/go";
import { IoTriangle } from "react-icons/io5";


const ProductCard = ({currentItem}) => {
    let {icon, dispatch, cartState } = useContext(userContext);

    // cart handler function 
    const cartHandler = () =>{
      dispatch({
        type: "ADD_TO_CART",
        item : currentItem
      })
    }
    console.log(cartState);
    //
  return (
    <div className="flex flex-col gap-5 w-[20vw]">
      <h1 className="text-3xl font-medium ">{currentItem.name}</h1>
      {/* category and rating section */}
      <div className="flex items-center gap-10">
        <div className={`w-6 h-6 border-2 ${currentItem.isVeg?"border-green-500":"border-red-800"} flex justify-center items-center`}>
        {
            currentItem.isVeg?(
                <GoDotFill className="text-green-500" size={20}/>
            ):(
                <IoTriangle className="text-red-800" size={15}/>
            )
        }
        </div>
        <h1 className="text-red-600">{currentItem.category}</h1>
        <div className="flex gap-1 items-center">
          <icon.emptyStar size={15} className="text-yellow-700" />
          {currentItem.rating}
        </div>
      </div>
      {/* price and discount field */}
      <div className="flex gap-20">
        <h1 className="font-medium text-2xl">
          &#8377;{currentItem.finalPrice}
        </h1>
        <div className="flex items-center gap-3">
          <s className="font-medium text-black/50">
            &#8377;{currentItem.price}
          </s>
          <h2 className="font-medium text-red-600">
            {currentItem.discount}% OFF
          </h2>
        </div>
      </div>
      {/* product description section */}
      <p className="text-[17px] font-medium">{currentItem.description}</p>
      {/* nutrition section for each product */}
      <div className="flex flex-col gap-3">
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
      {/* Add to cart button. */}
      <button className="bg-violet-800 text-white py-2 rounded-2xl cursor-pointer hover:bg-violet-700 hover:scale-98" onClick={cartHandler}>
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
