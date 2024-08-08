import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import BasicLayout from "../layouts/BasicLayout";
import { ROUTES } from "./consts";
import UserProfile from "../pages/UserProfile";
import Login from "../pages/Login";
import UserList from "../pages/UserList";
import Notifications from "../pages/Notifications";

const router = createBrowserRouter([
  {
    path: "",
    element: <BasicLayout />,
    children: [
      {
        path: ROUTES.HOME,
        element: <Home />,
      },
      {
        path: ROUTES.ABOUT_US,
        element: <AboutUs />,
      },
      {
        path: ROUTES.USER_PROFILE,
        element: <UserProfile />,
      },
      {
        path: ROUTES.LOGIN,
        element: <Login />,
      },
      {
        path: ROUTES.USER_LIST,
        element: <UserList />,
      },
      {
        path: ROUTES.NOTIFICATIONS,
        element: <Notifications />,
      },
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
