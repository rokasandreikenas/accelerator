import { useEffect, useState } from "react";
import axios from "axios";

interface Category {
  name: string;
  color: string;
  url: string;
}

const CategoryList = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/categories")
      .then((response) => {
        setCategories(response.data);
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

export default CategoryList;
