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

  const onClickMenuMobile = (e) => {
    // e.preventDefault();
    document
      .getElementsByClassName("menuMobile")[0]
      .classList.toggle("menuMobile_active");
    document
      .getElementsByClassName("menuMobileBlock")[0]
      .classList.toggle("menuMobileBlock_active");
  };

  const onClickCategoriesButton = (e) => {
    setCatOpen((catIsOpen) => !catIsOpen);
    e.preventDefault();
    document
      .getElementsByClassName("navCategoriesBlock")[0]
      .classList.toggle("navCategoriesBlock_active");
  };

  const handleClickMenu = (target) => {
    setMenuOpen((menuIsOpen) => !menuIsOpen);
    onClickMenuMobile(target);
  };

  return (
    <>
      <nav id={`${styles.nav}`}>
        <div className="container" style={{ position: "relative" }}>
          <MenuMobileBlock />
          <NavCategoriesBlock />
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
                onClick={onClickCategoriesButton}
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
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
