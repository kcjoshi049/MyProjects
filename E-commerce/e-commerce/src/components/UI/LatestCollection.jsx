import { ShopContext } from "../../context/ShopContext";
import { useContext } from "react";
import Title from "./Title";
import Card from "../../pages/Card";

const LatestCollection = () => {
  let { products, dark } = useContext(ShopContext);
  console.log(products);
  return (
    <div className="flex flex-col items-center">
      <Title text1={"LATEST"} text2={"COLLECTION"} />
    <ul className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-[85vw] m-auto mt-2.5 mb-2.5 items-center gap-y-[20px] gap-x-[10px] ${dark?"":"bg-white text-black"}`}>
        {products.slice(0,15).map((element) => {
            return (
              <>
                <Card element={element}/>
              </>
            );
        })}
      </ul>
    </div>
  );
};

export default LatestCollection;
