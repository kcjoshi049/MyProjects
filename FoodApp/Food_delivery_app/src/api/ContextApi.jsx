import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

export let userContext = createContext();

export const ShopContext = ({ children }) => {
  let [search, setSearch] = useState("");
  let [food_data, setdata] = useState([]);
  let icon = {
    emptyStar : FaStar, 
    halfStar  :  FaStarHalfAlt, 
    fillStar  :  FaRegStar
  }
  

  useEffect(()=>{
    axios.get("https://food-delivery-api-r3y6.onrender.com/foodItems").then((response)=>{
        setdata(response.data);
    }).catch((err)=>{
        console.error("error :- ",err);
    })
  },[])

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <userContext.Provider value={{ handleSearch, search, food_data, icon }}>
      {children}
    </userContext.Provider>
  );
};
