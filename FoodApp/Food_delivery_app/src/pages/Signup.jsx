import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";
import { IoIosMail } from "react-icons/io";
import { FaEye, FaEyeSlash, FaApple, FaGoogle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const Signup = () => {
  let [showEye, setShowEye] = useState(false);
  let [eye, setEye] = useState(false);
  let current = useLocation();

  return (
    <div
      className="w-[80vw] m-auto h-screen my-10 flex items-end  flex-col bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage:
          "url(https://plus.unsplash.com/premium_photo-1683892034683-b6896f6245f9?q=80&w=1170&auto=format&fit=crop)",
        fontFamily: "Ubuntu",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* MAIN CONTAINER */}
      <div className="w-[80vw] m-auto h-screen flex flex-col mb-10 items-end pt-10 pr-15 relative">
        {/* CARD */}
        <div className="w-[30vw] pl-5 py-6 flex flex-col gap-6 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
          {/* LOGO + TEXT */}
          <div className="flex flex-col gap-2 text-white">
            <Logo />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">Welcome back!</h1>
              <h3 className="text-white/80 ">We Are Happy To See You Again.</h3>
            </div>
          </div>

          {/* TOGGLE BUTTON */}
          <div className="flex w-[25vw] border border-white/20 h-12 rounded-3xl justify-center items-center bg-white/10 backdrop-blur-md">
            <NavLink
              to={"/log-in"}
              className={`w-[12vw] flex justify-center items-center rounded-2xl h-8 transition-all ${
                current.pathname === "/log-in"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Sign In
            </NavLink>

            <NavLink
              to={"/sign-up"}
              className={`w-[12vw] flex justify-center items-center rounded-2xl h-8 transition-all ${
                current.pathname === "/sign-up"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Sign Up
            </NavLink>
          </div>

          {/* FORM START */}
          <form className="flex flex-col gap-3">
            {/* EMAIL FIELD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-between border border-white/30 w-[25vw] h-11 rounded-3xl px-5 bg-white/10 backdrop-blur-md text-white"
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="outline-none bg-transparent w-[20vw] text-white placeholder-white/70"
                required
              />
              <IoIosMail size={22} className="text-white/80" />
            </motion.div>

            {/* PASSWORD FIELD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-between border border-white/30 w-[25vw] h-11 rounded-3xl px-5 bg-white/10 backdrop-blur-md text-white"
            >
              <input
                type={showEye ? "text" : "password"}
                placeholder="Enter password"
                className="outline-none bg-transparent w-[20vw] text-white placeholder-white/70"
                required
              />
              {showEye ? (
                <FaEye
                  size={22}
                  className="text-white/80 cursor-pointer"
                  onClick={() => setShowEye(false)}
                />
              ) : (
                <FaEyeSlash
                  size={22}
                  className="text-white/80 cursor-pointer"
                  onClick={() => setShowEye(true)}
                />
              )}
            </motion.div>

            {/* CONFIRM PASSWORD */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center justify-between border border-white/30 w-[25vw] h-11 rounded-3xl px-5 bg-white/10 backdrop-blur-md text-white"
            >
              <input
                type={eye ? "text" : "password"}
                placeholder="Confirm password"
                className="outline-none bg-transparent w-[20vw] text-white placeholder-white/70"
                requireds
              />
              {eye ? (
                <FaEye
                  size={22}
                  className="text-white/80 cursor-pointer"
                  onClick={() => setEye(false)}
                />
              ) : (
                <FaEyeSlash
                  size={22}
                  className="text-white/80 cursor-pointer"
                  onClick={() => setEye(true)}
                />
              )}
            </motion.div>

            {/* REMEMBER ME */}
            <div className="flex w-[25vw] justify-between text-white/80 text-[15px]">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4" />
                Remember Me
              </label>
            </div>

            {/* SIGNUP BUTTON */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="flex justify-center items-center w-[25vw] bg-blue-600 h-10 rounded-3xl text-white text-[18px] shadow-lg"
            >
              Signup
            </motion.button>
          </form>

          {/* DIVIDER */}
          <div className="flex items-center gap-1 w-[25vw] justify-center text-white">
            <div className="h-px w-[10vw] bg-white/40"></div>
            <div className="text-[20px]">or</div>
            <div className="h-px w-[10vw] bg-white/40"></div>
          </div>

          {/* SOCIAL BUTTONS */}
          <div className="flex flex-col gap-3">
            <motion.div whileHover={{ scale: 1.03 }}>
              <NavLink
                to={"#"}
                className="flex justify-center items-center w-[25vw] h-10 gap-2 rounded-3xl bg-black/90 text-white shadow-xl"
              >
                <FaApple size={25} /> log in with Apple
              </NavLink>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }}>
              <NavLink
                to={"#"}
                className="flex justify-center items-center w-[25vw] h-10 gap-2 rounded-3xl border border-white/40 bg-white/10 text-white shadow-xl"
              >
                <FaGoogle size={25} /> log in with Google
              </NavLink>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
