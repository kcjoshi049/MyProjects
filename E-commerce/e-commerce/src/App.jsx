import "react-router-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./components/Layout/AppLayout"
import ErrorPage from "./pages/ErrorPage"
import PlaceOrder from "./pages/PlaceOrder"
import About from "./pages/About"
import Card from "./pages/Card"
import Collection from "./pages/Collection"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Orders from "./pages/Orders"
import Product from "./pages/Product"
import Home from "./pages/Home"
import { ToastContainer } from 'react-toastify';
import SignUp from "./pages/SignUp"
import { useContext } from "react"
import { ShopContext } from "./context/ShopContext"

export default function App(){
  let {dark} = useContext(ShopContext);
  let router = createBrowserRouter([
    {
      path : "/",
      element : <AppLayout />,
      errorElement : <ErrorPage />,
      children :[
        {
          path : "/about",
          element : <About />
        },
        {
          path : "/card",
          element : <Card />
        },
        {
          path:"/collection",
          element:<Collection />
        },
        {
          path:"contact",
          element:<Contact />
        },
        {
          path : "placeorder",
          element : <PlaceOrder />
        },
        {
          path:"/product/:productId",
          element:<Product />
        },
        {
          path:"orders",
          element :<Orders />
        },
        {
          path :"/",
          element : <Home />
        },
        {
          path:"orders/place-order",
          element : <PlaceOrder />
        },
        {
          path:"log-in",
          element : <Login />
        },
        {
          path:"sign-up",
          element: <SignUp />
        }
      ]
    }
  ])
  return (
    <>
    <div className={`${dark?"bg-black text-white":"bg-white text-black"}`}>

    <ToastContainer />
    <RouterProvider router={router} />
    </div>
    </>
  )
}