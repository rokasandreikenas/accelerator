import SearchComponent from "./components/SearchComponent";
import Todos from "./components/Todos";
import Users from "./components/Users";
import useFetch from "./hooks/useFetch";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const users = data ?? [];

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
      <Users />
      <Todos />
      <SearchComponent />
    </div>
  );
};

export default App;
