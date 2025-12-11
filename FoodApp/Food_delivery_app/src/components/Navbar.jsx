import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  let [temp, setTemp] = useState(false);
  let [result, setResult] = useState({ display: "none" });
  let location = useLocation();
  let condition = () => {
    if (temp) {
      setTemp(false);
      setResult({ display: "flex" });
    } else {
      setTemp(true);
      setResult({ display: "none" });
    }
  };
  return (
      <div className="flex w-[80vw] m-auto justify-between p-5 mt-10 items-center bg-white">
        <Logo />
        <div className="flex gap-30 items-center">
          <ul
            className="flex gap-7 text-[17px] from-neutral-300"
            style={{ fontFamily: '"Ubuntu", serif' }}
          >
            <li className={`${(location.pathname === "/")?"text-blue-500":""}`}>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li className={`${(location.pathname === "/menu")?"text-blue-500":""}`}>
              <NavLink to={"menu"}>Menu</NavLink>
            </li>
            <li className={`${(location.pathname === "/about")?"text-blue-500":""}`}>
              <NavLink to={"about"}>About Us</NavLink>
            </li>
            <li className={`${(location.pathname === "/contact")?"text-blue-500":""}`}>
              <NavLink to={"contact"}>Contact</NavLink>
            </li>
          </ul>
        <SearchBar />
        </div>
        <div className="flex gap-10">
          <div className="flex items-center justify-center relative">
            <FaCartShopping size={30} className="cursor-pointer hover:text-black/80" />
            <div className="w-5 h-5 rounded-full bg-blue-700 flex justify-center items-center text-[13px] font-bold absolute -top-2.5 -right-2.5">
              2
            </div>
          </div>
          <div className="relative">
            <FaUserCircle
              size={30}
              className="cursor-pointer text-blue-400 hover:text-blue-300"
              onClick={() => {
                condition();
              }}
            />
            <ul
              className="flex justify-around items-center rounded-xl text-[15px] absolute right-[-45px] font-semibold text-white "
              style={result}
            >
              <NavLink
                className={"w-full"}
                to={"/"}
                onClick={() => {
                  condition();
                }}
              >
                <li className="border-r-2 self-center bg-gray-600/50 hover:bg-black/50 cursor-pointer px-2 py-1 rounded-l-xl">
                  Admin
                </li>
              </NavLink>

              <NavLink
                onClick={() => {
                  condition();
                }}
                to={"log-in"}
              >
                <li className=" bg-gray-600/50 hover:bg-black/50 cursor-pointer px-3 py-1 rounded-r-xl">
                  User
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
