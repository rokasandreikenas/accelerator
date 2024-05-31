import { useEffect, useState } from "react";
import axios from "axios";
import CategoryCard from "./CategoryCard";
import styles from "./CategoryList.module.scss";
import { Category } from "./types";

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
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard
          key={category.name}
          category={category}
          className={styles.card}
        />
      ))}
    </div>
  );
};

export default CategoryList;
