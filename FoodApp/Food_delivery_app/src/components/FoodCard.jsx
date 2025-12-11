import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { LuIndianRupee } from "react-icons/lu";
import { NavLink } from "react-router-dom";

const FoodCard = ({ element }) => {
  const emptyStarLoop = (stars, num) => {
    for (let i = 0; i < num; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-700" />);
    }
  };

  const fillStarLoop = (stars, num) => {
    for (let i = 0; i < num; i++) {
      stars.push(<FaStar key={`fill-${i}`} className="text-yellow-700" />);
    }
  };

  const fillHalfStar = (stars) => {
    stars.push(<FaStarHalfAlt key={`half`} className="text-yellow-700" />);
  };

  const star = () => {
    const stars = [];
    const x = element.rating;

    switch (true) {
      case x === 0:
        emptyStarLoop(stars, 5);
        break;
      case x > 0 && x < 1:
        fillHalfStar(stars);
        emptyStarLoop(stars, 4);
        break;
      case x === 1:
        fillStarLoop(stars, 1);
        emptyStarLoop(stars, 4);
        break;
      case x > 1 && x < 2:
        fillStarLoop(stars, 1);
        fillHalfStar(stars);
        emptyStarLoop(stars, 3);
        break;
      case x === 2:
        fillStarLoop(stars, 2);
        emptyStarLoop(stars, 3);
        break;
      case x > 2 && x < 3:
        fillStarLoop(stars, 2);
        fillHalfStar(stars);
        emptyStarLoop(stars, 2);
        break;
      case x === 3:
        fillStarLoop(stars, 3);
        emptyStarLoop(stars, 2);
        break;
      case x > 3 && x < 4:
        fillStarLoop(stars, 3);
        fillHalfStar(stars);
        emptyStarLoop(stars, 1);
        break;
      case x === 4:
        fillStarLoop(stars, 4);
        emptyStarLoop(stars, 1);
        break;
      case x > 4 && x < 5:
        fillStarLoop(stars, 4);
        fillHalfStar(stars);
        break;
      case x === 5:
        fillStarLoop(stars, 5);
        break;
      default:
        emptyStarLoop(stars, 5);
    }

    return stars;
  };
  {
    return (
      <NavLink
        className="cursor-pointer hover:scale-95 duration-200 bg-linear-to-br from-black/50 via-black/20 to-white rounded-t-4xl px-5 shadow-xl shadow-black/20"
        to={`/Product/${element.id}`}
        key={element.name}
      >
        <div
          className=" pb-10 flex flex-col gap-3 text-[16px]"
          style={{ fontFamily: "Ubuntu" }}
        >
          <img
            src={element.images.thumbnail}
            alt={element.name}
            className="w-[200px] rounded-full self-center "
          />
          <h2>{element.name}</h2>
          <h1 className="flex  items-center text-[18px] gap-0.5">
            {element.price} <LuIndianRupee size={16} />
          </h1>
          <div className="flex gap-1">{star()}</div>
        </div>
      </NavLink>
    );
  }
};

export default FoodCard;
