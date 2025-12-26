import { NavLink } from "react-router-dom";
import { FaHome, FaChevronRight } from "react-icons/fa";

const TopImage = ({ url, name }) => {
  return (
    <div
      className={`w-[80vw] h-[60vh] mt-10  relative"`}
      style={{
        fontFamily: '"Josefin Sans", sans-serif',
        backgroundImage: `url(${url})`,
        backgroundRepeat : "no-repeat",
        backgroundSize:"cover"
      }}
    >
      {/* image overlay */}
      <div className="absolute w-[80vw] h-[60vh] bg-black/70 flex flex-col justify-center pl-10">
        <h1 className="text-white text-[40px]">{name}</h1>
        <div className="text-white flex gap-3 items-center ">
          <NavLink
            to={"/"}
            className="flex gap-2 items-center hover:text-white/50 "
          >
            <FaHome size={27} className="mb-2" />
            <h2 className=" text-[20px]">Home</h2>
          </NavLink>
          <FaChevronRight size={12} />
          <h4 className="text-yellow-600">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default TopImage;
