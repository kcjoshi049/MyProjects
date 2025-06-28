import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { MdCurrencyRupee } from "react-icons/md";
import RelatedProducts from "./RelatedProducts";
import { assets } from "../assets/frontend_assets/assets";

const Product = () => {
  const { productId } = useParams();
  let { products, addToCart, dark } = useContext(ShopContext);
  let product = products.find((item) => item._id === productId);
  const [img, setImg] = useState(product?.image[0] || "");
  const [size, setSize] = useState("");

  let imageSetting = (e) => {
    if (!(e === img)) {
      setImg(e);
    }
  };
  useEffect(() => {
    if (product) {
      setImg(product.image[0]);
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);

  if (product) {
    return (
      <>
        {/* <----- Product Subimages ----->  */}
        <div className="mt-7 mb-10 w-[90vw] m-auto lg:grid lg:grid-cols-[4fr_4fr] gap-7 max-lg:gap-2 flex flex-col">
          <div className="lg:grid lg:grid-cols-[1fr_3fr] gap-7 flex  flex-col-reverse">
            <div className="flex lg:flex-col gap-3 justify-start items-center  overflow-auto h-[400px] max-lg:h-auto ">
              {product.image.map((element) => {
                return (
                  <img
                    src={element}
                    alt="img"
                    className={`w-[125px] h-auto cursor-pointer ${
                      element === img ? "opacity-60" : ""
                    }`}
                    onClick={() => {
                      imageSetting(element);
                    }}
                  />
                );
              })}
            </div>
            {/* <------- Product main img ---------> */}
            <div className="h-fit">
              <img src={img} alt="img" className="w-[700px]" />
            </div>
          </div>
          {/* <------ Product Details -------> */}
          <div className="p-2.5 flex flex-col gap-7 pr-[60px] font-sans">
            <div className="flex flex-col gap-3">
              <h1 className="text-2xl font-semibold">{product.name}</h1>
              <div className="flex gap-1.5 items-center">
                <img src={assets.star_icon} alt="img" className="w-4 h-4" />
                <img src={assets.star_icon} alt="img" className="w-4 h-4" />
                <img src={assets.star_icon} alt="img" className="w-4 h-4" />
                <img src={assets.star_icon} alt="img" className="w-4 h-4" />
                <img
                  src={assets.star_dull_icon}
                  alt="img"
                  className="w-4 h-4"
                />
                <p className="text-[20px]">(122)</p>
              </div>
            </div>
            <h1 className="flex items-center text-3xl font-bold text-[25px] ">
              <MdCurrencyRupee size={25} style={{ marginTop: "4px" }} />
              {product.price * 5}
            </h1>
            <p
              className={`text-[19px] ${dark?"text-white/70":"text-black/85"}`}
              style={{ wordSpacing: "2px", lineHeight: "30px" }}
            >
              {product.description}
            </p>
            <div className="flex flex-col justify-center gap-5">
              <h1 className="text-[19px] ">Select Size</h1>
              <div className="flex items-center gap-5">
                {product.sizes.map((element) => {
                  return (
                    <button
                      className={`flex items-center justify-center w-7.5 h-7.5 ${dark?"bg-white/10":"bg-black/30"}  pl-6.5 pr-6.5 pt-5 pb-5 text-[18px] cursor-pointer ${
                        element === size ? "border-1 border-red-800" : ""
                      }`}
                      onClick={() => setSize(element)}
                    >
                      {element}
                    </button>
                  );
                })}
              </div>
            </div>
            <button
              className={`${dark?"bg-white text-black font-bold":"bg-black text-white"} w-[150px] h-[50px] text-[15px] cursor-pointer`}
              onClick={() => {
                addToCart(product._id, size);
              }}
            >
              ADD TO CART
            </button>
            <hr />
            <div
              className={`flex flex-col justify-center gap-1.5  ${dark?"text-white/70":"text-black/90"}`}
              style={{ wordSpacing: "1.5px" }}
            >
              <h1>100% Original product.</h1>
              <h1>Cash on delivery is available on this product.</h1>
              <h1>Easy return and exchange policy within 7 days.</h1>
            </div>
          </div>
        </div>
        {/* <------ Description section ------> */}
        <div className="w-[90vw] m-auto  mt-7 mb-7">
          <div className="flex items-center">
            <button className={`border-2 p-2.5 pl-5 pr-5 border-r-0 border-b-0 font-semibold ${dark?"border-white/20":"border-black/40"}`}>
              Description
            </button>
            <button className={`border-2 ${dark?"border-white/20":"border-black/40"} p-2.5 pl-5 pr-5 border-b-0`}>
              Reviews (122)
            </button>
          </div>
          <div className={`border-2 ${dark?"border-white/20":"border-black/40"} p-2.5 flex flex-col gap-5`}>
            <p>
              An e-commerce website is an online platform that facilitates the
              buying and selling of products or services over the internet. It
              serves as a virtual marketplace where businesses and individuals
              can showcase their products, interact with customers, and conduct
              transactions without the need for a physical presence. E-commerce
              websites have gained immense popularity due to their convenience,
              accessibility, and the global reach they offer.
            </p>
            <p>
              E-commerce websites typically display products or services along
              with detailed descriptions, images, prices, and any available
              variations (e.g., sizes, colors). Each product usually has its own
              dedicated page with relevant information.
            </p>
          </div>
        </div>
        {/* <----- Related Product Section -------->  */}
        <RelatedProducts product={product} />
      </>
    );
  } else {
    return <h1>Loading....</h1>;
  }
};

export default Product;
