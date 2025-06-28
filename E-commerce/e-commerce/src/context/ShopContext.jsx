import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";

export const ShopContext = createContext();

let ShopContextProvider = (props) =>{
    let currency = '';
    let delivery_fee = 40;
    let [searchValue, setSearchValue] = useState("");
    let [cartItems, setCartItems] = useState({});
    let [search, setSearch] = useState(false);
    let [dark, setDark] = useState(true);
    // let [cartValue, setCartValue] = useState(0);

    const addToCart = async(itemId, size) => {
        if(!size){
            toast.error("size is not selected");
            return;
        }
        let cartData = structuredClone(cartItems);
        if(cartData[itemId]){
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1;
            }
            else{
                cartData[itemId][size] = 1;
            }
        }
        else{
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        setCartItems(cartData);
    } 

    const cartQuantity = () =>{
        let value = 0;
        for(const cartId in cartItems){
            for(const size in cartItems[cartId]){
                if(cartItems[cartId][size] > 0){
                    value += cartItems[cartId][size];
                }
            }
        }
        return value;
    }
    useEffect(()=>{
        console.log(cartItems);
        
    },[cartItems])

    const updateQuantity = async (itemId, size, quantity) => {
        let cartData = structuredClone(cartItems);

        cartData[itemId][size] = quantity;
        setCartItems(cartData)
    }
    const getAmmount =() =>{
        let totalAmmount = 0;
        for(const items in cartItems){
            let itemInfo = products.find((product) => product._id === items);
            for(const item in cartItems[items]){
                try {
                    if(cartItems[items][item] > 0){
                        totalAmmount += itemInfo.price * cartItems[items][item] * 5;
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return totalAmmount;
    }
    let value = {
        products,currency,delivery_fee, searchValue, setSearchValue, cartItems, addToCart, cartQuantity, updateQuantity , getAmmount, search, setSearch, dark, setDark
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;