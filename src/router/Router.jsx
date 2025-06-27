import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RotLayOut from "../layout/RotLayOut";
import Home from "../pages/Home";
import AuthLayOut from "../layout/AuthLayOut";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Coverage from "../pages/Coverage";
import PrivateRoute from "../privateroute/PrivateRoute";
import AddParcel from "../pages/AddParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RotLayOut></RotLayOut>,
    children: [
      {
        index: true,
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/coverage',
        element: <Coverage></Coverage>,
        loader: () => fetch('./coverage.json'),
      },
      {
        path: '/addParcel',
        element: <PrivateRoute>
          <AddParcel></AddParcel>
        </PrivateRoute>,
        loader: () => fetch('./coverage.json'),
      }
    ]
  },
  {
    path: '/',
    element: <AuthLayOut></AuthLayOut>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      }
    ]
  }
]);