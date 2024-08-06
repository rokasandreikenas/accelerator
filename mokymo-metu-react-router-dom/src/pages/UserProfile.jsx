import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ROUTES } from "../router/consts";

const UserProfile = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((resp) => resp.json())
      .then((response) => setUser(response))
      .catch((error) => console.error(error));
  }, []);

  if (!user) return <div>Loading or not found...</div>;

  return (
    <div>
      UserProfile {user.name}
      <button onClick={() => navigate(ROUTES.HOME)}>Back to Home page</button>
    </div>
  );
};

export default UserProfile;
