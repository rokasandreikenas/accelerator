import Topbar from "./components/Topbar";
import UserSection from "./components/UserSection";
import { ThemeProvider } from "./context/ThemeContext";
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <ThemeProvider>
        <Topbar />
        <UserSection />
      </ThemeProvider>
    </UserProvider>
  );
};

export default App;
