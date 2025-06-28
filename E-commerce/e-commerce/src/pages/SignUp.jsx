import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const SignUp = () => {
  const { dark } = useContext(ShopContext);

  // Theme logic only
  const borderColor = dark ? "border-white/30" : "border-black/60 border-2";
  const inputBg = dark ? "bg-black text-white" : "bg-white text-black";
  const linkColor = dark ? "hover:text-white/50 text-white" : "hover:text-black/50 text-black font-semibold";
  const formBg = dark ? "bg-black/60" : "bg-white/80";
  const headingColor = dark ? "text-white" : "text-black";
  const buttonTheme = dark
    ? "bg-white text-black hover:bg-white/60"
    : "bg-black text-white hover:bg-black/90";

  return (
    <div className={`flex justify-center items-center m-auto w-[95vw] max-w-[400px] min-h-[350px] flex-col gap-10 mt-[100px] mb-[70px] rounded-2xl shadow-lg ${formBg}`}>
      <div className="flex justify-center items-center gap-1 ">
        <h1 className={`text-3xl ${headingColor}`} style={{ fontFamily: "Ubuntu, sans-serif" }}>
          Sign up
        </h1>
        <span className={`border w-14 h-0 mt-1 `}></span>
      </div>
      <form action="" className="w-full">
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              required
              className={`border pt-2 pb-2 pl-4 w-full rounded-md outline-none ${borderColor} ${inputBg}`}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={`border pt-2 pb-2 pl-4 w-full rounded-md outline-none ${borderColor} ${inputBg}`}
            />
            <input
              type="password"
              placeholder="Confirm password"
              required
              className={`border pt-2 pb-2 pl-4 w-full rounded-md outline-none ${borderColor} ${inputBg}`}
            />
          </div>

          <div className="flex flex-row justify-between gap-2 text-sm">
            <NavLink className={linkColor} to={"/log-in"}>
              Login Here
            </NavLink>
          </div>
          <button
            type="submit"
            className={`flex justify-center items-center pt-2 pb-2 pl-5 pr-5 font-semibold text-[20px] cursor-pointer font-sans w-full rounded-md transition ${buttonTheme}`}
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
