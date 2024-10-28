import { createContext, useEffect, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

export const UserContext = createContext();

const fakeUser = { name: "Rokas", id: 1 };

export const UserProvider = ({ children }) => {
  // const [user, setUser] = useState(null);
  const [user, setUser] = useLocalStorage("user", null);

  // useEffect(() => {
  //   const localUser = localStorage.getItem("user");
  //   if (localUser) {
  //     setUser(JSON.parse(localUser));
  //   }
  // }, []);

  const login = () => {
    setUser(fakeUser);

    // localStorage.setItem("user", JSON.stringify(fakeUser));
  };

  const logout = () => {
    setUser(null);

    // localStorage.clear("user");
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
