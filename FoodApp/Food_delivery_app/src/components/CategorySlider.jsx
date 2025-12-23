import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useRef } from "react";
import foodCategories from "../assets/Category";

const CategorySlider = () => {
  let scrollRef = useRef(null);

  const leftScroll = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behaviour: "smooth",
    });
  };

  const rightScroll = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behaviour: "smooth",
    });
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-[26px] ">What's on your mind?</h2>
        <div className="flex items-center justify-center gap-5 pr-5">
          <div
            className="flex justify-center items-center p-2 rounded-full bg-black/20 hover:bg-blue-400/30 cursor-pointer"
            onClick={() => leftScroll()}
          >
            <BiLeftArrowAlt />
          </div>
          <div
            className="flex justify-center items-center p-2 bg-black/20 rounded-full hover:bg-blue-400/30 cursor-pointer"
            onClick={() => rightScroll()}
          >
            <BiRightArrowAlt />
          </div>
        </div>
      </div>
      <div
        className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-x-10 duration-200 "
        ref={scrollRef}
      >
        {foodCategories.map((val) => {
          return (
            <NavLink
              className={"shrink-0 w-[200px] select-none"}
              key={val.name}
            >
              <div className="flex flex-col gap-2 items-center font-semibold hover:scale-105">
                <img
                  src={val.img}
                  alt={val.category}
                  className="w-full h-[200px] object-cover rounded-xl"
                />
                <h2>{val.category}</h2>
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default CategorySlider;
