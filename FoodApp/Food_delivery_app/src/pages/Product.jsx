import { useContext } from "react";
import { useParams } from "react-router-dom";
import { userContext } from "../api/ContextApi";

const Product = () => {
  let { productId } = useParams();
  productId = Number(productId);
  let { food_data } = useContext(userContext);
  let currentItem = food_data?.find((elem) => {
    return elem.id === productId;
  });

  if (food_data.length !== 0) {
    return <div>
        
    </div>;
  }
  else {
    return <div>Loading...</div>
  }
};

export default Product;
