import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  // arba
  // const [count, setCount] = useState(0);

  const [name, setName] = useState<string | null>(null);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setName("Rokas")}>Set name Rokas</button>
    </div>
  );
};

export default Counter;
