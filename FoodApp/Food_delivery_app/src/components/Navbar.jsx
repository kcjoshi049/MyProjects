import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useContext, useState } from "react";
import SearchBar from "./SearchBar";
import { motion } from "framer-motion";
import Logo from "./Logo";
import { userContext } from "../api/ContextApi";

const Navbar = () => {
  let [temp, setTemp] = useState(false);
  let [result, setResult] = useState({ display: "none" });
  let { cartState } = useContext(userContext);

  let condition = () => {
    if (temp) {
      setTemp(false);
      setResult({ display: "flex" });
    } else {
      setTemp(true);
      setResult({ display: "none" });
    }
  };
  let navItems = [
    { item: "Home", path: "/" },
    { item: "Menu", path: "/menu" },
    { item: "About Us", path: "/about" },
    { item: "Contact", path: "/contact" },
  ];
  return (
    <div className="flex w-[90vw] m-auto justify-between p-5 mt-10 items-center bg-white">
      <Logo />
      <div className="flex gap-30 items-center">
        <ul
          className="flex gap-7 text-[17px] from-neutral-300"
          style={{ fontFamily: '"Ubuntu", serif' }}
        >
          {navItems.map((elem) => {
            return (
              <li key={elem.item}>
                <NavLink to={elem.path}>
                  {({ isActive }) => (
                    <div className="relative">
                      {elem.item}

                      {isActive && (
                        <motion.div
                          layoutId="nav-underline"
                          className="absolute left-0 -bottom-1 h-0.5 w-full bg-blue-700 rounded-xl"
                          transition={{
                            type: "spring",
                            stiffness: 500,
                            damping: 30,
                          }}
                        />
                      )}
                    </div>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <SearchBar />
      </div>
      <div className="flex gap-10">
        <NavLink
          className="flex items-center justify-center relative cursor-pointer"
          to={"cart"}
        >
          <FaCartShopping
            size={30}
            className="cursor-pointer hover:text-black/80"
          />
          <div
            className={`w-5 h-5 rounded-full bg-blue-700 flex justify-center items-center text-[13px] font-bold  -top-2.5 -right-2.5 ${
              cartState.items.length === 0 ? "hidden" : "absolute"
            }`}
          >
            {cartState.items.length}
          </div>
        </NavLink>
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
              to={"admin"}
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
