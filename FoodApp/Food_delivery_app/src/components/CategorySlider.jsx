import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
import {NavLink} from 'react-router-dom';
import { useRef } from "react";
import category from '../assets/Category';


const CategorySlider = () => {
    let scrollRef = useRef(null);

  
  const leftScroll = () =>{
    scrollRef.current.scrollBy({
      left : -300,
      behaviour : "smooth"
    })
  }

  const rightScroll = () =>{
    scrollRef.current.scrollBy({
      left : 300,
      behaviour : "smooth"
    })
  }
  return (
    <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-[26px] ">What's on your mind?</h2>
          <div className="flex items-center justify-center gap-5 pr-5">
            <div className="flex justify-center items-center p-2 rounded-full bg-black/20 hover:bg-blue-400/30 cursor-pointer" onClick={() => leftScroll()}>
              <BiLeftArrowAlt />
            </div>
            <div className="flex justify-center items-center p-2 bg-black/20 rounded-full hover:bg-blue-400/30 cursor-pointer" onClick={() => rightScroll()}>
              <BiRightArrowAlt/>
            </div>
          </div>
        </div>
        <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth gap-x-6 duration-200 " ref={scrollRef}>
          {category.map((val) => {
            return (
              <NavLink className={"shrink-0 w-[150px] select-none"} key={val.name}>
                <img
                  src={val.image}
                  alt={val.name}
                  className="w-full h-[150px] object-cover rounded-lg"
                />
              </NavLink>
            );
          })}
        </div>
      </div>
  )
}

export default CategorySlider
