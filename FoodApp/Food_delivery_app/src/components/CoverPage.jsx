import { useState, useEffect} from "react";
import slides from "../assets/SlideShow_image";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const CoverPage = () => {
  let [currentIndex, setCurrentIndex] = useState(0);
  let prevSlide = () => {
    let isFirstSlide = currentIndex === 0;
    let newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  let nextSlide = () => {
    let isLastSlide = currentIndex === slides.length - 1;
    let newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  let dotFunction = (para) => {
    return para === currentIndex;
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
      <div className=" flex mt-[50px]">
        <div className="">
          <div className=" w-[35vw]">
            <p
              className="text-[30px] font-semibold "
              style={{ fontFamily: '"Bitter", serif' }}
            >
              From comfort food to gourmet delights, your next meal is just a
              tap away — hot, fresh, and made just for you.
            </p>
          </div>
          <div className="flex gap-5 mt-5">
            <button
              className="bg-red-900 pl-5 pr-5 pt-2 pb-2 rounded-full text-[15px] cursor-pointer"
              style={{ fontFamily: '"Ubuntu", serif' }}
            >
              View Menu
            </button>
            <button
              className="bg-gray-400/20 pl-5 pr-5 pt-2 pb-2 rounded-full text-[15px] cursor-pointer"
              style={{ fontFamily: '"Ubuntu", serif' }}
            >
              Book Table
            </button>
          </div>
          <div></div>
        </div>
        <div
          className="w-[45vw] h-[25vw] rounded-xl bg-cover bg-center flex flex-col items-center justify-end gap-[140px]  group duration-500 pb-12.5 outline-none border-none"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        >
          <div className="flex items-center justify-between w-[40vw] ">
            <div className="ml-3 rounded-xl hidden group-hover:flex w-5 h-10 bg-white/50 items-center justify-center ">
              <FaAngleLeft
                size={20}
                className="text-gray-900 cursor-pointer "
                onClick={() => {
                  prevSlide();
                }}
              />
            </div>
            <div className="mr-3 rounded-xl hidden group-hover:flex bg-white/50 justify-center items-center bg-white\50 w-5 h-10">
              <FaAngleRight
                size={20}
                className="text-gray-900 cursor-pointer"
                onClick={() => {
                  nextSlide();
                }}
              />
            </div>
          </div>
          <div className="flex items-center">
            <div
              className={`w-3 h-3 rounded-full ${
                dotFunction(0) ? "bg-gray-600" : "bg-white/70"
              } mr-2 cursor-pointer`}
              onClick={() => setCurrentIndex(0)}
            ></div>
            <div
              className={`w-3 h-3 rounded-full ${
                dotFunction(1) ? "bg-gray-600" : "bg-white/70"
              } mr-2 cursor-pointer`}
              onClick={() => setCurrentIndex(1)}
            ></div>
            <div
              className={`w-3 h-3 rounded-full ${
                dotFunction(2) ? "bg-gray-600" : "bg-white/70"
              } mr-2 cursor-pointer`}
              onClick={() => setCurrentIndex(2)}
            ></div>
            <div
              className={`w-3 h-3 rounded-full ${
                dotFunction(3) ? "bg-gray-600" : "bg-white/70"
              } mr-2 cursor-pointer`}
              onClick={() => setCurrentIndex(3)}
            ></div>
            <div
              className={`w-3 h-3 rounded-full ${
                dotFunction(4) ? "bg-gray-600" : "bg-white/70"
              } mr-2 cursor-pointer`}
              onClick={() => setCurrentIndex(4)}
            ></div>
          </div>
        </div>
      </div>
  );
};

export default CoverPage;
