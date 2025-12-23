import { createContext, useState,useEffect } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";


export let userContext = createContext();

export const ShopContext = ({ children }) => {
  let {pathname} = useLocation();
  let [search, setSearch] = useState("");
  let [food_data, setdata] = useState([]);
  let [currentCategory, setCurrentCategory] = useState([]);
  let query = currentCategory.join(",");
  let icon = {
    emptyStar : FaStar, 
    halfStar  :  FaStarHalfAlt, 
    fillStar  :  FaRegStar
  }
  let url = "https://food-delivery-api-r3y6.onrender.com/foodItems"
  let params = {};

  if(pathname === "/"){
    params.isTrending = true;
  }else if(query){
    params.category = query;
  }

  useEffect(()=>{
    axios.get(url, {params}).then((response)=>{
        setdata(response.data);
    }).catch((err)=>{
        console.error("error :- ",err);
    })
  },[query, currentCategory])

  let handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase().trim());
  };

  return (
    <userContext.Provider value={{ handleSearch, search, food_data, icon, currentCategory,setCurrentCategory }}>
      {children}
    </userContext.Provider>
  );
};