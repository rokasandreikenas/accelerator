import { useParams } from "react-router-dom";
import { useTodo } from "../hooks/todos";

const SingleTodo = () => {
  const { id } = useParams();
  const todoId = +(id ?? "");
  const { data, isLoading } = useTodo(todoId);

  console.log(data);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Todo not found</div>;
  }

  return <div>{data.title}</div>;
};

export default SingleTodo;
