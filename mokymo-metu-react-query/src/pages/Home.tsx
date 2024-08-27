import { Link } from "react-router-dom";
import { useTodos } from "../hooks/todos";

const Home = () => {
  const { data } = useTodos();
  const todos = data ?? [];

  console.log(data);
  console.log(todos);
  //   const [todos, setTodos] = useState<Todo[]>([]);

  //   useEffect(() => {
  //     fetchTodos()
  //       .then((response) => {
  //         setTodos(response);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);

  return (
    <div>
      <Link to="/todos">Redirect to todos</Link>
      <br />
      {todos.map((todo) => (
        <div key={todo.id}>
          <Link to={`/todos/${todo.id}`}>{todo.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
