import { useContext, useMemo, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import Card from "./Card";
import { FiSearch } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";

const Collection = () => {
  const { products, searchValue, setSearchValue, search, setSearch, dark } =
    useContext(ShopContext);
  const [dropdown, setDropdown] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sort, setSort] = useState("relavent");

  const drop = () => setDropdown((prev) => !prev);

  const toggleCategory = (e) => {
    const value = e.target.value;
    setCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSubCategory = (e) => {
    const value = e.target.value;
    setSubCategory((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const filteredProducts = useMemo(() => {
    let filtered = [...products];

    if (category.length > 0) {
      filtered = filtered.filter((item) => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      filtered = filtered.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    if (searchValue.length > 0) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    switch (sort) {
      case "low-high":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "high-low":
        return [...filtered].sort((a, b) => b.price - a.price);
      default:
        return filtered;
    }
  }, [products, category, subCategory, sort, searchValue]);

  return (
    <div className={`w-[90vw] m-auto flex flex-col justify-center items-center gap-[20px] text-xl mt-3.5 mb-10 ${dark?"":"bg-white text-black"}`}>
      {/* this code is for the search bar */}
      <div className={`flex m-auto  items-center ${searchValue?"":(search?"hidden":"")}`}>                                
        <label htmlFor="search">
          <FiSearch
            className={`${dark?"bg-white/20":"bg-gray-400"} rounded-tl-2xl rounded-bl-2xl pl-1.5 pr-1.5 text-[35px]`}
          />
        </label>
        <input
          type="text"
          name="mysearch"
          id="search"
          className={`  h-[35px] rounded-tr-2xl rounded-br-2xl outline-none w-[70vw] pl-[10px] lg:w-[40vw] ${dark?"bg-white/20":"bg-gray-300"}`}
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <RxCross2 className="cursor-pointer text-[25px] ml-2" onClick={()=>{
          setSearch(true)
          setSearchValue("")
          }}/>
      </div>
      <div className="flex max-lg:flex-col ">
        <div className={`flex flex-col justify-center gap-6 w-[15vw] self-start mt-7 `}>
        {/* filters */}
          <div className="flex justify-center items-center gap-2.5 self-start">
            <h3 className={`${dark?"text-white/80":"text-black/80"} lg:text-2xl `}>FILTERS</h3>
            <img
              src={assets.dropdown_icon}
              alt="dropdown"
              className={`w-2.5 h-4 sm:hidden ${
                dropdown ? "rotate-90" : ""
              } cursor-pointer`}
              onClick={drop}
            />
          </div>

          {/* Categories */}
          <div
            className={`border-t w-[200px] p-5 flex flex-col gap-2.5 ${dark?"bg-white/10":"bg-black/30"} ${
              dropdown ? "" : "hidden"
            } md:flex`}
          >
            <h3 className="text-[15px] font-bold">CATEGORIES</h3>
            <div className="flex items-center gap-1.5">
              <input
                id="male"
                type="checkbox"
                value="Men"
                onChange={toggleCategory}
              />
              <label
                htmlFor="male"
                className={` text-[17px] cursor-pointer ${dark?"text-white/60":"text-black"}`}
              >
                Male
              </label>
            </div>
            <div className="text-white/60 flex items-center gap-1.5">
              <input
                id="female"
                type="checkbox"
                value="Women"
                onChange={toggleCategory}
              />
              <label
                htmlFor="female"
                className={`text-[17px] cursor-pointer ${dark?"text-white/60":"text-black"}`}
              >
                Female
              </label>
            </div>
            <div className="flex items-center gap-1.5">
              <input
                id="kids"
                type="checkbox"
                value="Kids"
                onChange={toggleCategory}
              />
              <label
                htmlFor="kids"
                className={`text-[17px] cursor-pointer ${dark?"text-white/60":"text-black"}`}
              >
                Kids
              </label>
            </div>
          </div>

          {/* Subcategories */}
          <div
            className={`border-t w-[200px] p-5 flex flex-col gap-2.5 ${dark?"bg-white/10":"bg-black/30"} ${
              dropdown ? "" : "hidden"
            } md:flex`}
          >
            <h3 className="text-[15px] font-bold">TYPE</h3>
            <div className="flex items-center gap-1.5">
              <input
                id="topwear"
                type="checkbox"
                value="Topwear"
                onChange={toggleSubCategory}
              />
              <label
                htmlFor="topwear"
                className={`${dark?"text-white/60":"text-black"} text-[17px] cursor-pointer`}
              >
                Topwear
              </label>
            </div>
            <div className="flex items-center gap-1.5">
              <input
                id="bottomwear"
                type="checkbox"
                value="Bottomwear"
                onChange={toggleSubCategory}
              />
              <label
                htmlFor="bottomwear"
                className={`${dark?"text-white/60":"text-black"} text-[17px] cursor-pointer`}
              >
                Bottomwear
              </label>
            </div>
            <div className="flex items-center gap-1.5">
              <input
                id="winterwear"
                type="checkbox"
                value="Winterwear"
                onChange={toggleSubCategory}
              />
              <label
                htmlFor="winterwear"
                className={`${dark?"text-white/60":"text-black"} text-[17px] cursor-pointer`}
              >
                Winterwear
              </label>
            </div>
          </div>
        </div>

        <div className="lg:w-[70vw]">
          <div className="flex items-center justify-between mb-5">
            <div className="flex justify-center items-center gap-1.5 mb-[15px] mt-[15px]">
              <p className={`w-[50px] max-lg:hidden sm:w-[100px] h-[2px] sm:h-[3px] rounded-2xl ${dark?"bg-gray-400":"bg-black/70"}`}></p>
              <p className="lg:text-2xl text-[18px]">
                <span className={`${dark?"text-gray-50":"text-black"}`}>ALL</span>{" "}
                <span className={`text-gray-400 ${dark?"text-gray-400":"text-black/70"}`}>COLLECTION</span>
              </p>
              <p className={`w-[50px]  sm:w-[100px] h-[2px] sm:h-[3px] rounded-2xl ${dark?"bg-gray-400":"bg-black/70"}`}></p>
            </div>
            <select
              onChange={(e) => setSort(e.target.value)}
              name="selection"
              id="short"
              className={`h-[50px] text-[15px] lg:text-[17px] p-2.5 ${dark?"bg-white/10":"bg-black/30"} max-lg:w-[160px]`}
            >
              <option value="relavent" className={`${dark?"bg-black":"bg-white"}`}>
                Sort by : Relevant
              </option>
              <option value="low-high" className={`${dark?"bg-black":"bg-white"}`}>
                Sort by : Low to High
              </option>
              <option value="high-low" className={`${dark?"bg-black":"bg-white"}`}>
                Sort by : High to Low
              </option>
            </select>
          </div>

          <div className="flex justify-center items-center">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 w-[85vw] m-auto mt-2.5 mb-2.5 items-center gap-y-[20px] gap-x-[10px]">
              {filteredProducts.map((element) => (
                <Card key={element._id} element={element} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
