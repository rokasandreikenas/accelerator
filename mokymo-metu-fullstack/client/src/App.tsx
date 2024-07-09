import { useEffect, useState } from "react";
import { Category } from "./types/category";
import { fetchCategories } from "./api/category";

const App = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories()
      .then((response) => {
        setCategories(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {categories.map((category) => (
        <div key={category.name}>{category.name}</div>
      ))}
    </div>
  );
};

export default App;
