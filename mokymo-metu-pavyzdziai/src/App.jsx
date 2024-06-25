import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Hero from "./components/Hero";
import Services from "./pages/Services";
import UserProfileDocuments from "./pages/UserProfileDocuments";
import Button from "./components/Button";
import { ThemeProvider } from "./context/ThemeContext";

const Team = () => {
  return <div>My team...</div>;
};

const Home = () => {
  return (
    <div>
      <Hero />
      <br />
      <Button />
    </div>
  );
};

const Root = () => {
  return (
    <>
      <header>
        <h1>Logo</h1>
      </header>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "team",
        element: <Team />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <UserProfile />,
      },
      {
        path: "users/:userId/documents/:documentId",
        element: <UserProfileDocuments />,
      },
    ],
  },
]);

const App = () => {
  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
