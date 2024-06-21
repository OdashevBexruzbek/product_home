// styles
import "./App.css";
// layout
import MainLayout from "./layout/MainLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Register from "./pages/Register";

// react router dom imports
import {
  createBrowserRouter,
  RouterProvider, Navigate
} from "react-router-dom";
import { useContext } from "react";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig";


// action
import { actions as RegisterAction } from "./pages/Register";
import { useGlobalContext } from "./hooks/useGlobalContext";
import ProtectedRoutes from "./components/ProtectedRoutes"


function App() {

  const { user, dispatch, isAuthChange } = useGlobalContext();
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRoutes user={user}>
              <MainLayout /> 
        </ProtectedRoutes>, 
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/product/:id",
          element: <Product />,
        },
        {
          path: "/myaccount",
          element: <MyAccount/>
        },
      ],
    },
    {
      path: "/login",
      element:  user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element:  user ? <Navigate to="/" /> : <Register />,
      action: RegisterAction,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      dispatch({ type: "LOG_IN", payload: user });
      dispatch({ type: "IS_AUTH_CHANGE" });
    });
  }, []);

  return <>{isAuthChange && <RouterProvider router={routes} />}</>;
}

export default App;
