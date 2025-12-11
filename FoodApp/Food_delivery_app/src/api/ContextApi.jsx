import { createContext, useState,useEffect } from "react";
import axios from "axios";

export let userContext = createContext();

export const ShopContext = ({ children }) => {
  let [search, setSearch] = useState("");
  let [food_data, setdata] = useState([]);
  

  useEffect(()=>{
    axios.get("http://localhost:5003/fooditems").then((response)=>{
        setdata(response.data);
    }).catch((err)=>{
        console.error("error :- ",err);
    })
  },[])

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <userContext.Provider value={{ handleSearch, search, food_data }}>
      {children}
    </userContext.Provider>
  );
};
