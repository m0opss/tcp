import A from "../A";
import styles from "../../styles/Main/nav.module.sass";

const NavCategoriesBlockListItem = ({ img, title, link, i }) => {
  return (
    <li className={i == 1 ? styles.li_active : ""}>
      <img src={img} alt="" />
      <a href={link}>{title}</a>
      <img
        src="img/arrowRight.svg"
        className={`${styles.navCategoriesBlockListArrow}`}
        alt=""
      />
      <div className={`${styles.navCategoriesBlockSubmenu}`}>
        <div className={`${styles.navCategoriesBlockSubmenuBlockWrapper}`}>
          <div className={`${styles.navCategoriesBlockSubmenuBlock}`}>
            Популярные категории
            <ul>
              <li>Очень длинное название категории</li>
              <li>Очень длинное название категории</li>
              <li>Очень длинное название категории</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Очень длинное название категории</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Категория</li>
              <li>Категория</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.navCategoriesBlockSubmenuBlockWrapper}`}>
          <div className={`${styles.navCategoriesBlockSubmenuBlock}`}>
            Категория
            <ul>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
            </ul>
          </div>
          <div className={`${styles.navCategoriesBlockSubmenuBlock}`}>
            Категория
            <ul>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
            </ul>
          </div>
        </div>
        <div className={`${styles.navCategoriesBlockSubmenuBlockWrapper}`}>
          <div className={`${styles.navCategoriesBlockSubmenuBlock}`}>
            Категория
            <ul>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
            </ul>
          </div>
          <div className={`${styles.navCategoriesBlockSubmenuBlock}`}>
            Категория
            <ul>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
              <li>Под категории</li>
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
};

const NavCategoriesBlock = () => (
  <div className={`${styles.navCategoriesBlock} navCategoriesBlock flex`}>
    <div className={`${styles.navCategoriesBlockList} navCategoriesBlockList`}>
      <ul>
        {[...Array(16).keys()].map((i) => (
          <NavCategoriesBlockListItem
            img="img/DropCatIcon.svg"
            key={i}
            i={i}
            title="Одежда, обувь, украшения"
            link="#"
          />
        ))}
      </ul>
    </div>
    <style jsx>{`
      .navCategoriesBlock_active {
        transform: scaleX(1) translateX(0);
        opacity: 1;
        visibility: visible;
      }
    `}</style>
  </div>
);

export default NavCategoriesBlock;
