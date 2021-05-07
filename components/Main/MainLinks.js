import A from "../A";
import styles from "../../styles/Main/main.module.sass";

const MainLinksItem = ({ name, img, link }) => (
  <li className={styles.mainLinksItem}>
    <A href={link} className={styles.mainLinksItemLink}>
      <img src={img} alt="" />
      <p className={styles.mainLinksItemName}>{name}</p>
    </A>
  </li>
);

const MainLinks = ({ children, keywords }) => {
  return (
    <>
      <div className={styles.mainLinks}>
        <ul>
          <MainLinksItem
            name="Аукцион"
            link="/"
            img="img/auc.svg"
          />
          <MainLinksItem
            name="Покупки"
            link="/"
            img="img/mainLinksCart.svg"
          />
          <MainLinksItem
            name="Услуги"
            link="/"
            img="img/briefcase.svg"
          />
          <MainLinksItem
            name="Недвижимость"
            link="/"
            img="img/key.svg"
          />
        </ul>
      </div>
    </>
  );
};

export default MainLinks;
