import CategoryCard from "./CategoryCard";
import { categories } from "../../consts/category";
import styles from "./CategoryList.module.scss";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      {categories.map((category) => (
        <CategoryCard key={category.name} category={category} />
      ))}
    </div>
  );
};

export default CategoryList;
