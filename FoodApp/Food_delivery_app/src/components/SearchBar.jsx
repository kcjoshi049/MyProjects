import { FiSearch } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../api/ContextApi";
import { motion } from "framer-motion";

const SearchBar = () => {
    let {handleSearch,search} = useContext(userContext)
    let location = useLocation();
  return (
    <motion.form className={`m-auto items-center ${location.pathname === "/menu"?"flex":"hidden"}`} initial={{opacity:0,x:-10}} whileInView={{opacity:1, x:0}} transition={{duration:1}}>
      <input type="text" className="w-[12vw] h-9 bg-black/10 rounded-l-xl pl-5 outline-none" required placeholder="search here..." value={search} onChange={(e) => {
        handleSearch(e)
      }}/>
      <button className="px-2 bg-black/30 h-9 flex justify-center items-center rounded-r-xl cursor-pointer" type="submit">
        <FiSearch size={25} className="text-gray-600 hover:text-black"/>
      </button>
    </motion.form>
  )
}

export default SearchBar
