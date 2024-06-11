import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Users />
      <CreateUser />
    </QueryClientProvider>
  );
};

export default App;
