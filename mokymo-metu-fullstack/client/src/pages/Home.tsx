import Users from "../components/Users";
import CreateUser from "../components/CreateUser";
import { useUsers } from "../hooks/useUsers";

const Home = () => {
  const { data: categories } = useUsers();

  return (
    <div>
      {categories?.map((category) => (
        <div key={category.name}>{category.name}</div>
      ))}
      <br />
      <Users />
      <br />
      <CreateUser />
    </div>
  );
};

export default Home;
