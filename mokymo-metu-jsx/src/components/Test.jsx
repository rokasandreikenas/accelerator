import { useEffect, useState } from "react";

// dependency masyvas tuščias = kodas suveiks tik vieną kartą, kai mountins
const Test = () => {
  const [count, setCount] = useState(0);
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    console.log("Rokas inside useEffect");
    document.title = `You clicked ${count} times`;
    fetch(`https://jsonplaceholder.typicode.com/todos/${count + 1}`)
      .then((response) => response.json())
      .then((data) => setTodo(data));

    return () => {
      // unmountinant
      setCount(0);
      setTodo(null);
    };
  }, [count]);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Timer tick");
    }, 1000);

    // Grąžinimo funkcija veikia kaip valymo mechanizmas
  }, []); // Tuščias masyvas užtikrina, kad taimeris bus nustatytas tik vieną kartą

  return (
    <div>
      Test
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Next todo
      </button>
      <br />
      {todo && todo.title}
    </div>
  );
};

export default Test;
