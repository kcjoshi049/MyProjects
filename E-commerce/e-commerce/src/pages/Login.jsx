import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Login = () => {
  let { dark } = useContext(ShopContext);
  return (
    <div className="flex justify-center items-center m-auto w-[90vw] max-w-[400px] min-h-[350px] flex-col gap-10 mt-[100px] mb-[70px]">
      <div className="flex justify-center items-center gap-1 ">
        <h1 className="text-3xl" style={{ fontFamily: "Ubuntu, sans-serif" }}>
          Login
        </h1>
        <span className="border w-14 h-0 mt-1"></span>
      </div>
      <form action="" className="w-full">
        <div className="flex flex-col gap-5 ">
          <div className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              required
              className={`border pt-2 pb-2 pl-4 w-full rounded-md outline-none ${
                dark
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-black/60 border-2 bg-black/5 text-black"
              }`}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className={`border pt-2 pb-2 pl-4 w-full rounded-md outline-none ${
                dark
                  ? "border-white/10 bg-white/5 text-white"
                  : "border-black/60 border-2 bg-black/5 text-black"
              }`}
            />
          </div>

          <div className="flex flex-row justify-between gap-2 text-sm">
            <NavLink
              className={`${
                dark
                  ? "hover:text-white/50 text-white/80"
                  : "hover:text-black/70 text-black/80 font-semibold"
              }`}
              to={"/forgot-password"}
            >
              Forgot your password?
            </NavLink>
            <NavLink
              className={`${
                dark
                  ? "hover:text-white/50 text-white/80"
                  : "hover:text-black/70 text-black/80 font-semibold"
              }`}
              to={"/sign-up"}
            >
              Create account
            </NavLink>
          </div>
          <button
            type="submit"
            className={`flex justify-center items-center pt-2 pb-2 pl-5 pr-5 text-[20px] cursor-pointer font-sans w-full rounded-md transition ${
              dark
                ? "bg-white text-black font-semibold hover:bg-white/50"
                : "bg-black text-white hover:bg-black/90"
            }`}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
