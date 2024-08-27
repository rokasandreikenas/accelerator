import { useTodos } from "../hooks/todos";

const Todos = () => {
  const { data, refetch } = useTodos();
  const todos = data ?? [];
  console.log(todos);
  // cached items
  return (
    <div>
      Todos
      <button onClick={() => refetch()}>Refetch items</button>
    </div>
  );
};

export default Todos;
