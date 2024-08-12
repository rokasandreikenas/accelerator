import { createContext } from "react";
import { useLocalStorage } from "usehooks-ts";

const UserContext = createContext({
  user: null,
  isLoggedIn: false,
  login: () => {},
  logOut: () => {},
}); // first step

// second step create component
const UserProvider = ({ children }) => {
  const [user, setUser] = useLocalStorage("user", null);
  const isLoggedIn = !!user;

  const login = (user) => {
    setUser(user);
  };

  const logOut = () => {
    setUser(null);
  };
  // third step pass value as object
  return (
    <UserContext.Provider value={{ user, isLoggedIn, login, logOut }}>
      {children}
    </UserContext.Provider>
  );
};

// fourth step - export context and provider
export { UserContext, UserProvider };
