import { useContext, useEffect, useState } from "react";
import Title from "../components/UI/Title";
import { ShopContext } from "../context/ShopContext";
import { MdCurrencyRupee } from "react-icons/md";
import CartTotal from "./CartTotal";
import { RiDeleteBin6Line } from "react-icons/ri";

const Orders = () => {
  let { products, cartItems, updateQuantity, dark } = useContext(ShopContext);
  let [cartData, setCartData] = useState([]);

  useEffect(() => {
    let temp = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          temp.push({
            _id: itemId,
            size: size,
            quantity: cartItems[itemId][size],
          });
        }
      }
    }
    console.log(temp);
    setCartData(temp);
  }, [cartItems]);

  return (
    <>
      <div>
        <Title text1={"YOUR"} text2={"CART"} />
        {cartData.map((item, index) => {
          let productData = products.find(
            (product) => product._id === item._id
          );
          console.log(productData);
          return (
            <div
              key={index}
              className={`lg:mb-2.5 mb-5 m-auto w-[90vw] flex   justify-between max-lg:justify-center max-lg:gap-5 items-center h-25 lg:h-30 ${dark?"bg-white/10":"bg-black/10"}`}
            >
              <div className="flex gap-2.5 justify-center items-center">
                <img
                  src={productData.image[0]}
                  alt="img"
                  className="lg:w-25 lg:h-30 w-20 h-25 "
                />
                <div className="flex justify-center gap-2.5 flex-col  max-lg:w-auto">
                  <h1 className="lg:text-[18px]">{productData.name}</h1>
                  <div className="flex items-center gap-10">
                    <div className="flex items-center">
                      <MdCurrencyRupee size={15} />
                      {productData.price * 5}
                    </div>
                    <div className="lg:text-[18px] border-white/10 border-2 pl-2.5 pr-2.5">
                      {item.size}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex max-lg:flex-col justify-between max-lg:h-20 lg:w-[40vw]">
                <div className="flex justify-center items-center">
                  <input
                    type="number"
                    defaultValue={item.quantity}
                    min={1}
                    className="outline-none  hover:border-white/10 w-10  text-[20px]"
                    onChange={(e) =>
                      e.target.value === 0 || e.target.value === " "
                        ? null
                        : updateQuantity(
                            item._id,
                            item.size,
                            Number(e.target.value)
                          )
                    }
                  />
                </div>
                <div className="flex justify-start items-center lg:mr-15 ">
                  <RiDeleteBin6Line
                    size={20}
                    className=" cursor-pointer"
                    onClick={() => updateQuantity(item._id, item.size, 0)}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <CartTotal />
    </>
  );
};

export default Orders;
