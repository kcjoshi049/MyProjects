import { motion } from "framer-motion";
import { useContext } from "react";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import { userContext } from "../api/ContextApi";

const CartItem = ({ item }) => {
  let { dispatch } = useContext(userContext);
  // function to delete any item in the cart.
  let removeItem = () => {
    dispatch({
      type: "DELETE",
      id: item.id,
    });
  };

  // function to increase the quantity of any item in the cart.
  let increaseItem = () =>{
    dispatch({
      type : "INCREASE",
      id : item.id
    })
  }

  // function to decrease the quantity of any item in the cart
  let decreaseItem = () =>{
    dispatch({
      type : "DECREASE",
      id : item.id
    })
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -100, height: 0 }}
      transition={{ duration: 0.3 }}
      className="flex gap-4 py-6 border-b"
      style={{fontFamily: '"Josefin Sans", sans-serif'}}
    >
      <motion.img
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        src={item.images.thumbnail}
        className="w-24 h-24 object-cover rounded-lg"
      />

      <div className="flex  flex-col gap-3">
        <div className="text-[18px]">
            {item.name}
        </div>
        <div className="flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="p-2 flex items-center justify-center rounded-full bg-blue-500/30 hover:bg-gray-300 transition-colors cursor-pointer"
            aria-label="Decrease quantity"
          >
            <FaMinus size={15} className="text-black/80" onClick={item.qty>1?decreaseItem:removeItem}/>
          </motion.button>
          <motion.span
            key={item.qty}
            initial={{ scale: 1.3, color: "#3b82f6" }}
            animate={{ scale: 1, color: "#000000" }}
            transition={{ duration: 0.3 }}
            className="w-8 text-center"
          >
            {item.qty}
          </motion.span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center  p-2 justify-center rounded-full bg-blue-500/30 hover:bg-gray-300 transition-colors cursor-pointer"
            aria-label="Increase quantity"
          >
            <FaPlus size={15} className="text-black/80" onClick={increaseItem}/>
          </motion.button>
        </div>
      </div>

      <div className="flex flex-col items-end justify-between">
        <motion.button
          whileHover={{ scale: 1.2, rotate: 10 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-red-500 transition-colors"
          aria-label="Remove item"
        >
          <FaTrash className="w-5 h-5 cursor-pointer" onClick={removeItem} />
        </motion.button>
        <motion.p
          key={item.finalPrice * item.qty}
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          className="font-semibold"
        >
          &#8377; {(item.finalPrice * item.qty).toFixed(2)}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default CartItem;
