import { useContext } from "react";
import { assets } from "../assets/frontend_assets/assets";
import Subscribe from "../components/UI/Subscribe";
import Title from "../components/UI/Title";
import { ShopContext } from "../context/ShopContext";

const About = () => {
  let {dark} = useContext(ShopContext);
  return (
    <>
      <div className="w-[80vw] m-auto flex flex-col lg:gap-15 gap-10  mt-15 lf:mb-15">
        <Title text1={"ABOUT"} text2={"US"} />
        <div className="flex justify-between max-lg:flex-col lg:gap-20 gap-5 items-center">
          <img src={assets.about_img} alt="img" className="w-[400px]" />
          <div
            className={`flex flex-col gap-5 text-[18px]  ${dark?"text-white/60":"text-black/80"}  pr-10`}
            style={{
              fontFamily: "Ubuntu, sans-serif",
              wordSpacing: "2px",
              lineHeight: "27px",
            }}
          >
            <p>
              Shopsphere was born out of a passion for innovation and a desire
              to revolutionize the way people shop online. Our journey began
              with a simple idea: to provide a platform where customers can
              easily discover, explore, and purchase a wide range of products
              from the comfort of their homes.
            </p>
            <p>
              Since our inception, we've worked tirelessly to curate a diverse
              selection of high-quality products that cater to every taste and
              preference. From fashion and beauty to electronics and home
              essentials, we offer an extensive collection sourced from trusted
              brands and suppliers.
            </p>
            <div className="flex flex-col gap-2.5">
              <h1 className={`font-bold  ${dark?"text-white":"text-black"}`}>Our Mission</h1>
              <p>
                Our mission at shopsphere is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
        {/* Why choose us */}
        <div className="flex justify-center items-center gap-1.5 mb-[15px] mt-[15px]">
          <p className={`w-[100px] h-[3px] ${dark?"bg-gray-400":"bg-black/70"} rounded-2xl`}></p>
          <p className="text-[20px]">
            <span className={`${dark?"text-gray-50":"text-black"}`}>WHY</span>{" "}
            <span className={`${dark?"text-gray-400":"text-black/70"}`}>CHOOSE US</span>
          </p>
          <p className={`w-[100px] h-[3px] bg-gray-400 rounded-2xl ${dark?"bg-gray-400":"bg-black/70"}`}></p>
        </div>
        <div className="flex max-lg:flex-col">
          <div className={`border pt-20 pb-20 pl-10 pr-10 lg:w-[30vw]  justify-center flex flex-col gap-2.5 ${dark?"border-white/15":"border-black/70 border-2"}`}>
            <h1 className="text-[18px] font-semibold">Quality Assurance:</h1>
            <p className={`text-[17px] ${dark?"text-white/70":"text-black/90"}`}>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className={`border pt-20 pl-10 pr-10 pb-20 flex justify-center flex-col gap-2.5 lg:w-[30vw] ${dark?"border-white/15":"border-black/70 border-2"}`}>
            <h1 className="text-[18px] font-semibold">Convenience:</h1>
            <p className={`text-[17px]  ${dark?"text-white/70":"text-black/90"}`}>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className={`border pl-10 pr-10 justify-center pt-20  pb-20 flex flex-col gap-2.5 lg:w-[30vw] ${dark?"border-white/15":"border-black/70 border-2"}`}>
            <h1 className="text-[18px] font-semibold">
              Exceptional Customer Service:
            </h1>
            <p className={` ${dark?"text-white/70":"text-black/90"} text-[17px]`}>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default About;
