import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

const ThemeChange = () => {
    const{dark, setDark} = useContext(ShopContext);
  return (
      <div
        className={`w-12 h-5  bg-white/10 rounded-xl flex items-center cursor-pointer ${
          dark ? "" : "border-2 border-green-500 "
        }`}
        id="themeChange"
        onClick={() => {
          setDark(!dark);
        }}
        title={`${dark ? "switch to light mode" : "switch to dark mode"}`}
      >
        <div
          className={`w-5 h-5 rounded-2xl cursor-pointer blur-[2px] ${
            dark ? "bg-white border" : "translate-x-7 bg-blue-700 border"
          } transition-all delay-100 ease-in-out`}
        ></div>
      </div>
  );
};

export default ThemeChange;
