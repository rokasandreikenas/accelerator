import { useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const Services = () => {
  const [name, setName] = useLocalStorage("name", "");

  useEffect(() => {
    console.log(name);
  }, []);

  return (
    <div>
      <h1>My name is {name}</h1>
      Services <button onClick={() => setName("rokas")}>Click</button>
    </div>
  );
};

export default Services;
