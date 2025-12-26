import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const CoverPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen text-white/80">
      <div className=" w-[35vw] flex gap-3 justify-center items-center flex-col">
        <h1
          style={{ fontFamily: '"Pinyon Script", cursive' }}
          className="text-[50px] text-yellow-500"
        >
          Taste the Difference
        </h1>
        <p
          className="text-[30px]  tracking-wide w-[40vw] text-center"
          style={{ fontFamily: '"Ubuntu", sans-serif' }}
        >
          From comfort food to gourmet delights, your next meal is just a tap
          away — hot, fresh, and made just for you.
        </p>
      </div>
      <div className="flex gap-15 mt-5 w-[35vw] items-center justify-center">
        <NavLink to={"/menu"}>
          <motion.button
            className="self-start min-h-[52px] w-[10vw] cursor-pointer  font-medium rounded-3xl border-2"
            initial={{
              backgroundColor: "rgba(46, 139, 232,0.5)",
              color: "#fff",
            }}
            whileHover={{
              backgroundColor: "rgba(46, 139, 232)",
              color: "#000",
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
          >
            Menu
          </motion.button>
        </NavLink>
        <motion.button
          type="submit"
          className="self-start min-h-[52px] w-[10vw] cursor-pointer border-2 font-medium rounded-3xl"
          initial={{
            backgroundColor: "rgba(46, 139, 232,0.5)",
            color: "#fff",
          }}
          whileHover={{
            backgroundColor: "rgba(46, 139, 232)",
            color: "#000",
          }}
          whileTap={{
            scale: 0.97,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          Book Table
        </motion.button>
      </div>
    </div>
  );
};

export default CoverPage;
