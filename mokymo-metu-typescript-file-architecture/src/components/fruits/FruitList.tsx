import { useEffect, useState } from "react";
import { fetchFruits } from "./api";
import { Fruit } from "./types";

const FruitList = () => {
  const [fruits, setFruits] = useState<Fruit[]>([]);

  useEffect(() => {
    fetchFruits().then((response) => {
      setFruits(response);
    });
  }, []);

  return (
    <ul>
      {fruits.map((fruit) => (
        <li key={fruit.id}>{fruit.name}</li>
      ))}
    </ul>
  );
};

export default FruitList;
