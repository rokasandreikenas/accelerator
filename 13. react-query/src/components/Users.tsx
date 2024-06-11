import { useUsers } from "../hooks/useUsers";

const Users = () => {
  const { data, error, isLoading } = useUsers();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading users</div>;

  return (
    <ul>
      {data?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default Users;
