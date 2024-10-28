import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const UserSection = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      UserSection
      <button onClick={toggleTheme}>Change theme</button>
    </div>
  );
};

export default UserSection;
