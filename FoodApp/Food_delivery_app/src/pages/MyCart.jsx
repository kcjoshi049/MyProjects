import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { useContext } from "react";
import { userContext } from "../api/ContextApi";
import { FaCartShopping } from "react-icons/fa6";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const MyCart = () => {
  let { cartState } = useContext(userContext);

  return (
    <div className="w-[80vw] m-auto mt-10 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <FaCartShopping className="w-8 h-8" />
          <h1>Shopping Cart</h1>
          <motion.span
            key={cartState.items.length}
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
            className="text-gray-500"
          >
            ({cartState.items.length} items)
          </motion.span>
        </motion.div>

        {cartState.items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-12 text-center"
          >
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <FaCartShopping className="w-16 h-16 mx-auto mb-4 text-gray-300" />
            </motion.div>
            <h2 className="mb-2">Your cart is empty</h2>
            <p className="text-gray-600">Add some items to get started!</p>
          </motion.div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-lg shadow-sm p-6">
                <AnimatePresence mode="popLayout">
                  {cartState.items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100, height: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <CartItem item={item} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Order Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
                <h2 className="mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <motion.span
                      key={cartState.totalAmount}
                      initial={{ scale: 1.2, color: "#3b82f6" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    >
                      &#8377; {cartState.totalAmount.toFixed(2)}
                    </motion.span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax (10%)</span>
                    <motion.span
                      initial={{ scale: 1.2, color: "#3b82f6" }}
                      animate={{ scale: 1, color: "#000000" }}
                      transition={{ duration: 0.3 }}
                    ></motion.span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <motion.span
                      initial={{
                        scale: 1.2,
                      }}
                      animate={{
                        scale: 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >&#8377; {cartState.totalAmount>=500?"0":`40`}</motion.span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-semibold">Total</span>
                    <motion.span
                      key={cartState.totalAmount}
                      initial={{ scale: 1.3 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                      className="font-semibold"
                    >
                      &#8377; {cartState.totalAmount.toFixed(2)}
                    </motion.span>
                  </div>
                </div>

                <AnimatePresence>
                  {cartState.totalAmount < 300 && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-lg text-sm"
                    ></motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors mb-3 cursor-pointer"
                >
                  Proceed to Checkout
                </motion.button>
                <NavLink to={'/menu'}>
                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full border border-gray-300 py-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    Continue Shopping
                  </motion.button>
                </NavLink>

                <div className="mt-6 pt-6 border-t text-sm text-gray-600">
                  <p className="mb-2">We accept:</p>
                  <div className="flex gap-2">
                    {["Visa", "Mastercard", "PayPal"].map((method) => (
                      <motion.div
                        key={method}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + 0.1 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-3 py-1 border rounded"
                      ></motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCart;
