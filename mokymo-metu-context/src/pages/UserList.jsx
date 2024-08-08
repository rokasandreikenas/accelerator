import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { ROUTES } from "../router/consts";

const UserList = () => {
  const { isLoggedIn } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.HOME);
      // redirect to HOME
    }
  }, [isLoggedIn]);
  return <div>Protected route</div>;
};

export default UserList;
