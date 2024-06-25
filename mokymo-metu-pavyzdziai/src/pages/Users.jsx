import { useNavigate, Link } from "react-router-dom";
import useFetch from "../hooks/useHook";

function Users() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );
   
  // neigiamos reiksmes - null, undefined, 0, "", false
  // const users1 = data || []; // jeigu kairine puse neigiama, paima desinini varianta
  const users = data ?? []; // jeigu kairine puse null arba undefined, paima desinini varianta

  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <button onClick={() => navigate("/")}>Go back to home</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/users/${user.id}`}>
              {user.name} - {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
