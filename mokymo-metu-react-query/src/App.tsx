import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Todos from "./pages/Todos";
import SingleTodo from "./pages/SingleTodo";
import CreateTodo from "./pages/CreateTodo";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/todos",
        element: <Todos />,
      },
      {
        path: "/todos/new",
        element: <CreateTodo />,
      },
      {
        path: "/todos/:id",
        element: <SingleTodo />,
      },
    ],
  },
]);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
