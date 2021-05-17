import { useState } from "react";

import A from "../A";
import styles from "../../styles/Main/nav.module.sass";
import NavSearch from "./NavSearch";
import NavMore from "./NavMore";
import NavCategoriesBlock from "./NavCategoriesBlock";
import MenuMobileBlock from "./MenuMobileBlock";

const Nav = ({}) => {
  const [menuIsOpen, setMenuOpen] = useState(false);
  const [catIsOpen, setCatOpen] = useState(false);

  const onClickMenuMobile = (flag) => {
    if (flag) {
      document
        .getElementsByClassName("menuMobile")[0]
        .classList.toggle("menuMobile_active");
      document
        .getElementsByClassName("menuMobileBlock")[0]
        .classList.toggle("menuMobileBlock_active");
    } else {
      document
        .getElementsByClassName("menuMobile")[0]
        .classList.remove("menuMobile_active");
      document
        .getElementsByClassName("menuMobileBlock")[0]
        .classList.remove("menuMobileBlock_active");
    }
  };

  const onClickCategoriesButton = (flag) => {
    if (flag) {
      document
        .getElementsByClassName("navCategoriesBlock")[0]
        .classList.toggle("navCategoriesBlock_active");
    } else {
      document
        .getElementsByClassName("navCategoriesBlock")[0]
        .classList.remove("navCategoriesBlock_active");
    }
  };

  const handleClickCategory = () => {
    setMenuOpen(false);
    setCatOpen((catIsOpen) => !catIsOpen);
    onClickCategoriesButton(true);
    onClickMenuMobile(false);
  };

  const handleClickMenu = () => {
    setCatOpen(false);
    setMenuOpen((menuIsOpen) => !menuIsOpen);
    onClickCategoriesButton(false);
    onClickMenuMobile(true);
  };

  return (
    <>
      <nav id={`${styles.nav}`}>
        <div className="container" style={{ position: "relative" }}>
          <MenuMobileBlock handleClickMenu={handleClickMenu} />
          <NavCategoriesBlock handleClickCategory={handleClickCategory} />
          <div className={`${styles.navMainBlock}`}>
            {menuIsOpen ? (
              <img
                src="img/menu-mobile-active.svg"
                width="18"
                height="18"
                className={`${styles.menuMobile} ${styles.active} menuMobile`}
                onClick={handleClickMenu}
              />
            ) : (
              <img
                src="img/menu-mobile.svg"
                className={`${styles.menuMobile} ${styles.active} menuMobile`}
                onClick={handleClickMenu}
              />
            )}

            <div className={`${styles.navCategories}`}>
              <div
                onClick={handleClickCategory}
                className={`${styles.navCategoriesContent} navCategoriesButton flex`}
              >
                {catIsOpen ? (
                  <>
                    <img
                      width="22"
                      height="27"
                      src="img/menu-mobile-active.svg"
                      alt=""
                    />
                    <p style={{ color: "#41D8C2" }}>Каталог</p>
                  </>
                ) : (
                  <>
                    <img src="img/catalog.svg" alt="" />
                    <p>Каталог</p>
                  </>
                )}

                <img
                  src="img/arrow-down.svg"
                  className={`${styles.navCategoriesButtonMore}`}
                  alt=""
                />
              </div>
            </div>
            <NavSearch />
            <NavMore />
            <div className={`${styles.navMobMoreMenu}`}>
              <img src="img/QRCodeMobNav.svg" />
              <img src="img/SearchMobNav.svg" />
              <img src="img/CompareMobNav.svg" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
