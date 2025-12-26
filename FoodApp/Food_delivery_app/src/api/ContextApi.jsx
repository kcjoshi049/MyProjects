import { createContext, useState, useEffect, useReducer } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export let userContext = createContext();
export const ShopContext = ({ children }) => {
  const initialCartState = {
    items: [],
    totalAmount: 0,
  };
  // Function for the logic of add item and remove item to the cart

  const cartReducer = (state, action) => {
    // code to add the items to the cart
    if (action.type === "ADD_TO_CART") {
      // safety check
      if (!action.item || action.item.id === undefined) {
        console.error("Invalid item sent to cart:", action.item);
        return state;
      }

      const existingItem = state.items.find(
        (item) => item.id === action.item.id
      );

      let updatedItems;

      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.item.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedItems = [...state.items, { ...action.item, qty: 1 }];
      }

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + action.item.finalPrice,
      };
      // code to delete item from the cart
    } else if (action.type === "DELETE") {
      const itemToDelete = state.items.find((elem) => elem.id === action.id);

      if (!itemToDelete) return state;

      const updateItems = state.items.filter((elem) => elem.id !== action.id);

      return {
        items: updateItems,
        totalAmount:
          state.totalAmount - itemToDelete.finalPrice * itemToDelete.qty,
      };
    }
    // code to increase the quantity of the item
    else if (action.type === "INCREASE") {
      const itemToIncrease = state.items.find((elem) => elem.id === action.id);
      // check if the item exists or not.
      if (!itemToIncrease) return state;

      let updatedItems = state.items.map((item) =>
        item.id === action.id ? { ...item, qty: item.qty + 1 } : item
      );

      return {
        items: updatedItems,
        totalAmount: state.totalAmount + itemToIncrease.finalPrice,
      };
    }
    // code to decrease the quantity of the item
    else if (action.type === "DECREASE") {
      const itemToDecrease = state.items.find((elem) => elem.id === action.id);

      // check if the item exists or not
      if(!itemToDecrease) return state;

      let updateItems = state.items.map((item) => 
        item.id === action.id?({...item, qty:item.qty-1}):item
      );

      return {
        items : updateItems,
        totalAmount : state.totalAmount - itemToDecrease.finalPrice
      }
    }
    return state;
  };

  // reducer for cart details
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);
  //
  let { pathname } = useLocation();
  let [search, setSearch] = useState("");
  let [food_data, setdata] = useState([]);
  let [currentCategory, setCurrentCategory] = useState([]);
  let query = currentCategory.join(",");
  let icon = {
    emptyStar: FaStar,
    halfStar: FaStarHalfAlt,
    fillStar: FaRegStar,
  };
  let url = "https://food-delivery-api-r3y6.onrender.com/foodItems";
  let params = {};

  if (pathname === "/") {
    params.isTrending = true;
  } else if (query) {
    params.category = query;
  }

  useEffect(() => {
    axios
      .get(url, { params })
      .then((response) => {
        setdata(response.data);
      })
      .catch((err) => {
        console.error("error :- ", err);
      });
  }, [pathname, query]);

  let handleSearch = (e) => {
    setSearch(e.target.value.toLowerCase().trim());
  };

  return (
    <userContext.Provider
      value={{
        handleSearch,
        search,
        food_data,
        icon,
        currentCategory,
        setCurrentCategory,
        cartState,
        dispatch,
      }}
    >
      {children}
    </userContext.Provider>
  );
};
