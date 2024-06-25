// import "./Hero.css";
import styles from "./Hero.module.css";
import classNames from "classnames";

const Hero = () => {
  const isVisible = true;
  //   return (
  //     <div
  //       className={`${styles.container} ${styles.main} ${
  //         isVisible && styles.padding
  //       }`}
  //     >
  //       Hero
  //     </div>
  //   );
  return (
    <div
      className={classNames(
        styles.container,
        styles.main,
        isVisible && styles.padding
      )}
    >
      Hero
    </div>
  );
};

export default Hero;
