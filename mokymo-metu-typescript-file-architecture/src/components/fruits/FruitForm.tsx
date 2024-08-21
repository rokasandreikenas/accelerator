import { FormEvent, useState } from "react";
import { NewFruit } from "./types";
import { createFruit } from "./api";

const FruitForm = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const fruit: NewFruit = { name, color };
      await createFruit(fruit);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="name"
      />
      <input
        value={color}
        onChange={(event) => setColor(event.target.value)}
        placeholder="color"
      />
    </form>
  );
};

export default FruitForm;
