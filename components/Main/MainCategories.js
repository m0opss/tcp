import A from "../A";
import styles from "../../styles/Main/main.module.sass";

const CategoryItem = ({ name, img, link }) => (
  <li>
    <img src={img} alt="" />
    <a href={link}>{name}</a>
    <img
      src="img/arrowRight.svg"
      className={styles.mainCategoriesArrow}
      alt=""
    />
  </li>
);

const MainCategories = ({ children, keywords }) => {
  return (
    <>
      <div className={styles.mainCategories}>
        <ul>
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
          <CategoryItem
            name="Ноутбуки и компьютеры"
            link="#"
            img="img/cat-1.png"
          />
        </ul>
      </div>
    </>
  );
};

export default MainCategories;
