import styles from "../../styles/Main/main.module.sass";

const MainGraphicsItem = ({ title, btnTitle, data }) => (
  <div className={styles.mainGraphicsItem}>
    <p className={styles.mainGraphicsItemTitle}>{title}</p>
    <div className={styles.mainGraphicsItemData}>{data}</div>
    <div className={styles.mainGraphicsItemBtn}>{btnTitle}</div>
  </div>
);

const MainGraphics = ({}) => {
  return (
    <div className={`${styles.mainGraphics}`}>
      <MainGraphicsItem
        btnTitle="Стать участником"
        title="Доходы пользователей"
      />
      <MainGraphicsItem
        btnTitle="Стать участником"
        title="Доходы пользователей"
      />
      <MainGraphicsItem
        btnTitle="Стать участником"
        title="Доходы пользователей"
      />
    </div>
  );
};

export default MainGraphics;
