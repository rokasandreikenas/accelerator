import styles from "./CategoryList.module.scss";

const CategoryCard = ({ category }) => {
  const { name, icon } = category;
  const Icon = icon;

  return (
    <div className={styles.card}>
      <Icon fontSize={48} color={category.color} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

export default CategoryCard;
