import { useUsers } from "../hooks/useUsers";

const Users = () => {
  const { data, isLoading, error } = useUsers();
  const users = data ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
