import { NavLink } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const Footer = () => {
  let { dark } = useContext(ShopContext);

  // Theme classes
  const bgColor = dark ? "bg-black/80" : "bg-white/80";
  const borderColor = dark ? "border-white/30" : "border-black/30";
  const textMain = dark ? "text-white/70" : "text-black/70";
  const textHeading = dark ? "text-white" : "text-black";
  const linkColor = dark ? "text-blue-400 hover:text-blue-200" : "text-blue-800 hover:text-blue-600";
  const copyrightBg = dark ? "bg-black/90" : "bg-black/10";
  const copyrightText = dark ? "text-white/80" : "text-black/80";

  return (
    <div className={`${bgColor} w-full`}>
      <div className={`w-full h-[1px] ${dark?"bg-white/10":"bg-black/50"}`}></div>
      <div className={`flex flex-col gap-5 lg:grid lg:grid-cols-3 m-auto pb-2.5 lg:m-auto lg:w-80vw lg:ml-15 `}>
        {/* Logo section */}
        <div className={`p-2.5 max-lg:pl-5 max-lg:border-b ${borderColor}`}>
          <h1
            style={{ fontFamily: "Pacifico" }}
            className="text-2xl text-blue-700 m-3 ml-0"
          >
            ShopSphare
          </h1>
          <p className={`lg:w-[550px] ${textMain}`}>
            <span className={`font-semibold text-[17px] ${textHeading}`}>
              Welcome to Shopsphare – your one-stop online shopping destination.
            </span>
            <br />
            From fashion and electronics to home essentials, we offer a wide
            range of quality products at great prices. Enjoy fast delivery,
            secure payments, and a smooth shopping experience.
          </p>
        </div>
        {/* Company section */}
        <div className={`p-2.5 flex items-center lg:justify-center max-lg:pl-5 max-lg:border-b ${borderColor}`}>
          <ul>
            <li className={`mb-1 text-[18px] ${textHeading}`}>COMPANY</li>
            <li className={textMain}>
              <NavLink to={"/"} className={textMain}>Home</NavLink>
            </li>
            <li className={textMain}>
              <NavLink to={"About"} className={textMain}>About us</NavLink>
            </li>
            <li className={textMain}>
              <NavLink to={"#"} className={textMain}>Delivery</NavLink>
            </li>
          </ul>
        </div>
        {/* Get in touch section */}
        <div className={`p-2.5 flex items-center lg:justify-center max-lg:pl-5 max-lg:border-b ${borderColor}`}>
          <ul>
            <li className={`mb-1 text-[18px] ${textHeading}`}>GET IN TOUCH</li>
            <li className={textMain}>+91-000-000-0000</li>
            <li className={textMain}>
              <NavLink to={"#"} className={textMain}>SS144049@gmail.com</NavLink>
            </li>
            <li className={textMain}>
              <NavLink to={"#"} className={textMain}>Instagram</NavLink>
            </li>
            <li className={textMain}>
              <NavLink to={"#"} className={textMain}>Facebook</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright section */}
      <div className={`flex justify-center lg:items-center gap-1 ${copyrightBg} pb-5 w-full max-lg:p-2`}>
        <FaRegCopyright size={20} className="max-lg:mt-[3px]" />
        <h1 className={copyrightText}>
          2025 Shopsphare. All rights reserved. | 
          <NavLink to={"#"} className={linkColor}> Terms & Conditions </NavLink> | 
          <NavLink to={"#"} className={linkColor}>Privacy Policy</NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
