import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";


const Subscribe = () => {
    let OnFormSubmit = (event) =>{
        event.preventDefault();
    }
    let {dark} = useContext(ShopContext);
  return ( 
    <div className={`flex items-center justify-center flex-col gap-2.5 mt-[50px] pb-[50px]  ${dark?"":"bg-white text-black"}`}>
      <h4 className="text-2xl">Subscribe now & get 20% off</h4>
      <p className={` flex text-center ${dark?"text-white/70":"text-black"}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        facere officiis ad esse nisi magni quo eaque tempora blanditiis.{" "}
      </p>
      <form action="post" className="mt-2.5 flex justify-center items-center" onSubmit={OnFormSubmit}>
        <input
          type="email"
          name="mymail"
          id="mail"
          placeholder="Enter your email"
          className={`${dark?"bg-white/20":"bg-black/30"} w-[250px] pl-1.5 h-[34px] outline-none`}
          required
        />
        <button
          type="submit"
          className={`cursor-pointer ${dark?"bg-white text-black":"bg-black text-white"} text-sm h-[34px] border-none outline-none w-[100px] font-semibold `}
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default Subscribe;
