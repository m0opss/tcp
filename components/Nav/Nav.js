import A from "../A";
import styles from "../../styles/Main/nav.module.sass";
import NavSearch from "./NavSearch";
import NavMore from "./NavMore";
import NavCategoriesBlock from "./NavCategoriesBlock";
import MenuMobileBlock from "./MenuMobileBlock";

const Nav = ({}) => {
  const onClickMenuMobile = (e) => {
    e.preventDefault();
    document
      .getElementsByClassName("menuMobile")[0]
      .classList.toggle("menuMobile_active");
    document
      .getElementsByClassName("menuMobileBlock")[0]
      .classList.toggle("menuMobileBlock_active");
  };

  const onClickCategoriesButton = (e) => {
    e.preventDefault();
    console.log(e.target);
    document
      .getElementsByClassName("navCategoriesBlock")[0]
      .classList.toggle("navCategoriesBlock_active");
  };

  return (
    <>
      <nav id={`${styles.nav}`}>
        <div className="container" style={{ position: "relative" }}>
          <MenuMobileBlock />
          <NavCategoriesBlock />
          <div className={`${styles.navMainBlock}`}>
            <img
              src="img/menu-mobile.svg"
              className={`${styles.menuMobile} menuMobile`}
              alt=""
            />
            <div className={`${styles.navCategories}`}>
              <div
                onClick={onClickCategoriesButton}
                className={`${styles.navCategoriesContent} navCategoriesButton flex`}
              >
                <img src="img/catalog.svg" alt="" />
                <p>Каталог</p>
                <img
                  src="img/arrow-down.svg"
                  className={`${styles.navCategoriesButtonMore}`}
                  alt=""
                />
              </div>
            </div>
            <NavSearch />
            <NavMore />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
