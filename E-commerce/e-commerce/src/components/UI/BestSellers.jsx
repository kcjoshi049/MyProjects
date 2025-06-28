import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import Title from "./Title";
import Card from "../../pages/Card";


const BestSellers = () => {
  let { products, dark } = useContext(ShopContext);
  return (
    <div className="flex flex-col items-center">
      <Title text1={"BEST"} text2={"SELLERS"} />
      <ul className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-[85vw] m-auto mt-2.5 mb-2.5 items-center gap-y-[20px] gap-x-[10px] ${dark?"":"bg-white text-black"}`}>
        {products.map((element) => {
          if (element.bestseller) {
            return (
              <>
                <Card element={element}/>
              </>
            );
          }
        })}
      </ul>
    </div>
  );
};

export default BestSellers;
