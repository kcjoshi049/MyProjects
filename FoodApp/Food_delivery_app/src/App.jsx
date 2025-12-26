import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ShopContext } from "./api/ContextApi";
import Product from "./pages/Product";
import Admin from "./pages/Admin";
import MyCart from "./pages/MyCart";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ShopContext>
          <AppLayout />
        </ShopContext>
      ),
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/menu",
          element: <Menu />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/log-in",
          element: <Login />,
        },
        {
          path: "/sign-up",
          element: <Signup />,
        },
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "product/:productId",
          element: <Product />,
        },
        {
          path:"/admin",
          element : <Admin />
        },
        {
          path : '/cart',
          element : <MyCart />
        }
      ],
    },
  ]);

  return (
      <RouterProvider router={router} />
  );
};

export default App;
