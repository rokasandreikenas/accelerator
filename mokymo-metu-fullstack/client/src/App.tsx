import { QueryClient, QueryClientProvider } from "@tanstack/react-query"; // 1. import
import Home from "./pages/Home";

const queryClient = new QueryClient(); // 2. create instance

const App = () => {
  // 3. Wrapp and use
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
