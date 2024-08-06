import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import BasicLayout from "../layouts/BasicLayout";
import { ROUTES } from "./consts";
import UserProfile from "../pages/UserProfile";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <Layout>
//         <Home />
//       </Layout>
//     ),
//   },
//   {
//     path: "/about",
//     element: (
//       <Layout>
//         <AboutUs />
//       </Layout>
//     ),
//   },
// ]);

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
    ],
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
