import A from "../A";
import styles from "../../styles/Main/nav.module.sass";
import NavSearch from "./NavSearch";
import NavMore from "./NavMore";
import NavCategoriesBlock from "./NavCategoriesBlock";

const MenuMobileBlock = () => (
  <div className={`${styles.menuMobileBlock} menuMobileBlock`}>
    <div className={`${styles.menuMobileBlockContent} flex`}>
      <div className={`${styles.menuMobileBlockContent1}`}>
        <div className={`${styles.menuMobileBlockContent1Menu}`}>
          <ul>
            <li>
              <a href="#">
                <img src="" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className={`${styles.menuMobileBlockContent2}`}></div>
    </div>
    <style jsx>{`
      .menuMobileBlock_active {
        transform: scaleX(1) translateX(0);
        opacity: 1;
        visibility: visible;
      }
    `}</style>
  </div>
);

export default MenuMobileBlock;
