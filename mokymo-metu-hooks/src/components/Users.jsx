import { useState, useEffect } from "react";
import styles from "./Users.module.scss";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((response) => {
        setUsers(response);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to fetch users");
        setLoading(false);
      });
  }, []); // Efektas bus vykdomas tik vieną kartą, montuojant komponentą

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div clas>
      <h1>Users</h1>
      <input className={styles.input} />
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
