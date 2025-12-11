import FoodCard from "../components/FoodCard";
import { useState } from "react";
import { useContext } from "react";
import { userContext } from "../api/ContextApi";

const Menu = () => {
  let {search,food_data} = useContext(userContext);
  // find unique category.
  let food_category = []; // array of all categories of food in the app.
  food_data.forEach((elem) => {
    if (!food_category.includes(elem.category)) {
      food_category.push(elem.category);
    }
  });
  // array for storing the value of selected category.
  let [currentCategory, setCurrentCategory] = useState([]);
  let CategoryFunction = (e) => {
    let value = e.target.value;
    if (e.target.checked) {
      setCurrentCategory([...currentCategory, value]);
    }
    // removing if unchecked
    else {
      setCurrentCategory(
        currentCategory.filter((elem) => {
          return elem !== e.target.value;
        })
      );
    }
  };
  // console.log(currentCategory);
  //
  return (
    <div className="flex flex-col w-[80vw] m-auto gap-3 mt-5">
      <div>
        {/* for heading */}
        <div className="flex items-center  gap-2">
          <div className="w-25 border-none bg-black/70 h-0.5 rounded-2xl"></div>
          <div className="text-2xl">
            <span>ALL</span> <span className="text-black/55">ITEMS</span>
          </div>
          <div className="w-25 border-none bg-black/70 h-0.5 rounded-2xl"></div>
        </div>
      </div>
      <div className="w-[80vw] flex gap-15">
        {/* section to print get the category items. */}
        <div className="flex flex-col w-[10vw] pl-5 pt-5 pb-5 gap-2">
          {food_category.map((elem) => {
            return (
              <div className="flex  gap-2">
                <input
                  type="checkbox"
                  name="category"
                  id={elem}
                  value={elem}
                  onChange={(e) => CategoryFunction(e)}
                />
                <label htmlFor={elem} className="cursor-pointer">
                  {elem}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mt-15 ml-15">
          {/* code to get the list of items */}
          <div className="grid grid-cols-3 m-auto gap-10 ">
            {food_data.map((elem) => {
              if (currentCategory.length === 0) {
                if(elem.name.toLowerCase().trim().includes(search.toLowerCase().trim())){
                  return <FoodCard element={elem} key={elem.name} />
                }
                else{
                  return;
                }
              } else {
                if (currentCategory.includes(elem.category) && elem.name.toLowerCase().includes(search.toLowerCase())) {
                  return <FoodCard element={elem} key={elem.name} />;
                } else{
                  return;
                }
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
