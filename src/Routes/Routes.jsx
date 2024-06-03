import { createBrowserRouter } from "react-router-dom";
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home'
import Menu from '../Pages/Menu/Menu/Menu';
import Order from '../Pages/Order/Order/Order';
import Login from '../Pages/Login/Login';
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        // errorElement: <ErrorPage></ErrorPage>,
        children:[
          {
            path: "/",
            element: <Home></Home>, 
          },
          {
            path: "menu",
            element: <Menu></Menu>, 
          },
          {
            path: "order",
            element: <Order></Order>, 
          },
          {
            path: "order/:category",
            element: <Order></Order>, 
          },
          {
            path: "login",
            element: <Login></Login>
          },
          {
            path:"signUp",
            element: <SignUp></SignUp>
        },
    ]}
  ]);
  export default router