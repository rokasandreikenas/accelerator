import useLocalStorage from "../hooks/useLocalStorage";
import styles from "./Todos.module.scss";
// _input_id4n9_1

const Todos = () => {
  const [todos, setTodos] = useLocalStorage("todos", []);
  const [todo, setTodo] = useLocalStorage("todoInput", "");

  const handleAddTodo = () => {
    if (!todo) return;

    setTodos((prevTodos) => [...prevTodos, todo]);
    setTodo("");
  };

  return (
    <div>
      <h1>Todos list</h1>
      <input
        placeholder="New todo..."
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        className={styles.input}
      />
      <button onClick={handleAddTodo}>Add todo</button>
      <br />
      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem}>{todoItem}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
