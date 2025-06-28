import { useContext } from "react";
import Title from "../components/UI/Title";
import Card from "../pages/Card";
import { ShopContext } from "../context/ShopContext";

const RelatedProducts = ({ product }) => {
  const { products } = useContext(ShopContext);
  return (
    <div className="flex flex-col justify-center gap-5 mb-5">
      <Title text1={"RELATED"} text2={"PRODUCTS"} />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-[85vw] m-auto mt-2.5 mb-2.5 items-center gap-y-[20px] gap-x-[10px]">
        {products.map((element) => {
          if (
            element.category === product.category &&
            element.subCategory === product.subCategory &&
            element._id !== product._id
          ) {
            return <Card element={element} key={element._id} />;
          }
        })}
      </ul>
    </div>
  );
};

export default RelatedProducts;
