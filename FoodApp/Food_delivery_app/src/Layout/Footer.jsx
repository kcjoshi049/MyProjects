import { FaRegCopyright } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

const Footer = () => {
  return (
    <div className={` w-[80vw] m-auto mt-10  p-5 border-t-2 border-black/10 bg-transparent backdrop-blur-3xl `}>
      <div
        className={`flex  w-[80vw] lg:grid lg:grid-cols-3 justify-around gap-20 my-5 `}
      >
        {/* Logo section */}
        <div className={`max-lg:pl-5 max-lg:border-b `}>
          <Logo />
          <p className={`lg:w-[550px]`}>
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus distinctio voluptate dignissimos doloremque dolore quidem magnam, totam atque ipsum maxime placeat, accusamus modi ipsa tempore.
          </p>
        </div>
        {/* Company section */}
        <div
          className={`p-2.5 flex items-center lg:justify-center max-lg:pl-5 max-lg:border-b ml-30`}
        >
          <ul>
            <li className={`mb-1 text-[18px]`}>COMPANY</li>
            <li className="hover:text-blue-500">
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className="hover:text-blue-500">
              <NavLink to={"/About"}>About us</NavLink>
            </li>
            <li className="hover:text-blue-500">
              <NavLink to={"/"}>Delivery</NavLink>
            </li>
          </ul>
        </div>
        {/* Get in touch section */}
        <div
          className={` flex items-center lg:justify-center max-lg:pl-5 max-lg:border-b `}
        >
          <ul>
            <li className={`mb-1 text-[18px]`}>GET IN TOUCH</li>
            <li>+91-000-000-0000</li>
            <li>
              <NavLink to={"/"}>SS144049@gmail.com</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Instagram</NavLink>
            </li>
            <li>
              <NavLink to={"/"}>Facebook</NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Copyright section */}
      <div
        className={`flex justify-center lg:items-center gap-1 pb-5 w-full max-lg:p-2 mt-10`}
      >
        <FaRegCopyright size={20} className="max-lg:mt-[3px]" />
        <h1>
          2025 huff and puff. All rights reserved. |
          <NavLink to={"/"}> Terms & Conditions </NavLink> |
          <NavLink to={"/"}>Privacy Policy</NavLink>
        </h1>
      </div>
    </div>
  );
};

export default Footer;
