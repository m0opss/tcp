import A from "../A";
import styles from "../../styles/Main/nav.module.sass";
import React, { useEffect } from "react";

const NavCategoriesBlockListItem = ({
  img,
  title,
  link,
  i,
  activeInd,
  setActiveInd,
  openSub,
  setOpenSub,
}) => {
  const clickItem = () => {
    if (activeInd == i && openSub) {
      setOpenSub(false);
    } else if (activeInd != i && openSub) {
      setActiveInd(i);
    } else if (activeInd != i && !openSub) {
      setActiveInd(i);
      setOpenSub(true);
    } else if (activeInd == i && !openSub) {
      setOpenSub(true);
    }
  };
  return (
    <li className={openSub ? (i == activeInd ? styles.li_active : "") : ""}>
      <div className="">
        <img src={img} alt="" />
        <a href={link}>{title}</a>
      </div>
      <img
        src="img/arrowRight.svg"
        onClick={clickItem}
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

const NavCategoriesBlock = ({ handleClickCategory }) => {
  const [activeInd, setActiveInd] = React.useState(0);
  const [openSub, setOpenSub] = React.useState(false);
  useEffect(() => {
    if (window.innerWidth > 767) setOpenSub(true);
  }, []);
  return (
    <div className={`${styles.navCategoriesBlock} navCategoriesBlock flex`}>
      <div
        className={`${styles.navCategoriesBlockList} navCategoriesBlockList`}
      >
        <ul>
          <li className={styles.navCategoriesBlockTopRow}>
            <div className="">
              <img src="img/arrowMobLeft.svg" alt="" />
              <p>Одежда, обувь</p>
            </div>
            <div className="">
              <img src="img/search.svg" />
              <img
                src="img/menu-mobile-active.svg"
                width="18"
                height="18"
                className={`${styles.menuMobileClose} ${styles.active}`}
                onClick={handleClickCategory}
              />
            </div>
          </li>
          {[...Array(16).keys()].map((i) => (
            <NavCategoriesBlockListItem
              img="img/DropCatIcon.svg"
              key={i}
              activeInd={activeInd}
              setActiveInd={setActiveInd}
              openSub={openSub}
              setOpenSub={setOpenSub}
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
};

export default NavCategoriesBlock;
