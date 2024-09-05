import { useEffect, useState } from "react";
import axios from "axios";

interface User {
  id: number;
  name: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError("Failed to load users");
        console.error(error);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <h1>Waiting</h1>
        <div>Loading...</div>
      </div>
    );
  if (error) return <div>{error}</div>;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
