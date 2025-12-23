import FoodCard from "../components/FoodCard";
import { useContext } from "react";
import { userContext } from "../api/ContextApi";
import foodCategories from "../assets/Category";

const Menu = () => {
  let { search, food_data, currentCategory, setCurrentCategory } =
    useContext(userContext);
  
  // array for storing the value of selected category.
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
          {foodCategories.map((elem) => {
            return (
              <div className="flex  gap-2" key={elem.category}>
                <input
                  type="checkbox"
                  name="category"
                  id={elem.category}
                  value={elem.category}
                  onChange={(e) => CategoryFunction(e)}
                />
                <label htmlFor={elem.category} className="cursor-pointer">
                  {elem.category}
                </label>
              </div>
            );
          })}
        </div>
        <div className="mt-15 ml-15">
          {/* code to get the list of items */}
          <div className="grid grid-cols-3 m-auto gap-10 ">
            {food_data
              .filter((elem) => {
                return elem.name.toLowerCase().trim().includes(search);
              })
              .map((elem) => {
                return <FoodCard element={elem} key={elem.id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
