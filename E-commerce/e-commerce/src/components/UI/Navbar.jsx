import { useState, useEffect, useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { FaCartShopping } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import { ShopContext } from "../../context/ShopContext";
import { RxHamburgerMenu } from "react-icons/rx";
import { assets } from "../../assets/frontend_assets/assets";
import ThemeChange from "./ThemeChange";

const Navbar = () => {
  let [result, setResult] = useState({ display: "none" });
  let [temp, setTemp] = useState(false);
  let [menu, setMenu] = useState(false);
  let location = useLocation();
  let {
    searchValue,
    setSearchValue,
    cartQuantity,
    search,
    setSearch,
    dark,
  } = useContext(ShopContext);

  useEffect(() => {
    setSearch(location.pathname.includes("Collection"));
  }, [location, setSearchValue, searchValue]);
  let condition = () => {
    if (temp) {
      setTemp(false);
      setResult({ display: "none" });
    } else {
      setTemp(true);
      setResult({ display: "block" });
    }
  };
  return (
    <div
      className={`flex flex-col items-center ${
        dark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className={`flex w-full items-center justify-around h-[60px]`}>
        <NavLink
          className="text-blue-700 sm:text-[30px] tracking-[2px]  font-light cursor-pointer text-[25px]"
          style={{ fontFamily: "Pacifico" }}
          to={"/"}
        >
          ShopSphare
        </NavLink>
        <ul
          className="lg:flex justify-center items-center gap-[30px] text-[19px] ml-[150px] hidden"
          id="firstUl"
        >
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"Collection"}>Collection</NavLink>
          </li>
          <li>
            <NavLink to={"About"}>About</NavLink>
          </li>
          <li>
            <NavLink to={"Contact"}>Contact</NavLink>
          </li>
        </ul>
        <div className="flex justify-center items-center gap-[20px] lg:gap-[40px]  ">
          {/* this is for theme change */}
          <div className="max-lg:hidden">
            <ThemeChange />
          </div>
          {/* this is for search  */}
          <div className="flex ">
            <label htmlFor="search">
              <FiSearch
                className={`lg:pl-1.5 ${
                  search ? "" : "hidden"
                } lg:text-[35px] text-[25px] cursor-pointer`}
                onClick={() => {
                  setSearch(false);
                }}
              />
            </label>
          </div>
          <NavLink className="relative" to={"orders"}>
            <FaCartShopping className="lg:text-[30px] text-[25px]" />
            <div
              className={`bg-blue-600 rounded-3xl flex justify-center items-center w-[20px]
              h-[20px] absolute top-[-5px] left-[15px] cursor-pointer ${
                cartQuantity() > 0 ? "" : "hidden"
              }`}
            >
              {cartQuantity()}
            </div>
          </NavLink>
          <div className="relative">
            <CgProfile
              className="lg:text-[30px] text-[25px] cursor-pointer"
              onClick={condition}
            />
            <ul
              className={`absolute top-[35px] flex right-[-38px] w-[100px] justify-center items-center rounded-[5px] flex-col font-medium ${
                dark ? "bg-gray-50/80 text-black" : "bg-black/70 text-white"
              }`}
              style={result}
            >
              <NavLink
                className="cursor-pointer w-full"
                to="#"
                onClick={condition}
              >
                <li
                  className={`border-b-2 flex justify-center items-center h-8 w-full ${
                    dark ? "hover:bg-gray-50/80" : "hover:bg-white/50"
                  }`}
                >
                  Admin
                </li>
              </NavLink>
              <NavLink
                className="cursor-pointer w-full"
                to="log-in"
                onClick={condition}
              >
                <li
                  className={`w-full flex justify-center items-center h-8 ${
                    dark ? "hover:bg-gray-50/80" : "hover:bg-white/50"
                  }`}
                >
                  User
                </li>
              </NavLink>
            </ul>
          </div>
          <RxHamburgerMenu
            className={`cursor-pointer lg:hidden text-[25px] ${
              menu ? "hidden" : ""
            }`}
            onClick={() => {
              setMenu(true);
            }}
          />
        </div>
      </div>
      {/* for hamburgar */}
      <div
        className={`absolute top-[60px] transition-all duration-300 ease-in-out overflow-hidden bg-black ${
          menu ? "w-full" : "w-0"
        }`}
      >
        <ul
          className={`flex flex-col text-[19px] w-full bg-black pt-5 gap-5 transition-opacity duration-300 ease-in-out" id="firstUl ${
            dark ? "bg-black text-white" : "bg-white text-black"
          }`}
          style={{
            opacity: menu ? 1 : 0,
            pointerEvents: menu ? "auto" : "none",
          }}
        >
          <li className="flex items-center justify-between">
            {/* this is for back */}
            <div
              className="flex gap-2 items-center ml-2.5 cursor-pointer"
              onClick={() => {
                setMenu(false);
              }}
            >
              <img
                src={assets.dropdown_icon}
                alt="img"
                className="rotate-180 w-2.5 h-4"
              />
              back
            </div>
            {/* this is for theme change */}
            <div className="mr-10">
              <ThemeChange />
            </div>
          </li>
          <NavLink
            to={"/"}
            onClick={() => {
              setMenu(false);
            }}
          >
            <li
              className={`border-b-2 ${
                dark ? "border-white/20" : "border-black/40"
              } pt-2 pb-2 pl-2.5`}
            >
              Home
            </li>
          </NavLink>
          <NavLink
            to={"Collection"}
            onClick={() => {
              setMenu(false);
            }}
          >
            <li
              className={`border-b-2 ${
                dark ? "border-white/20" : "border-black/50"
              } pt-2 pb-2 pl-2.5`}
            >
              Collection
            </li>
          </NavLink>
          <NavLink
            to={"About"}
            onClick={() => {
              setMenu(false);
            }}
          >
            <li
              className={`border-b-2 ${
                dark ? "border-white/20" : "border-black/50"
              } pt-2 pb-2 pl-2.5`}
            >
              About
            </li>
          </NavLink>
          <NavLink
            to={"Contact"}
            onClick={() => {
              setMenu(false);
            }}
          >
            <li
              className={`border-b-2 ${
                dark ? "border-white/20" : "border-black/50"
              } pt-2 pb-2 pl-2.5`}
            >
              Contact
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
