import A from "../A";
import styles from "../../styles/Main/nav.module.sass";

const MainNav = ({}) => {
  return (
    <>
      <nav id={`${styles.nav}`}>
        <div className="container">
          <div className="flex">
            <div className={`${styles.navCategories}`}>
              <img
                src="img/menu-mobile.svg"
                className={`${styles.navCategoriesMobile}`}
                alt=""
              />
              <div
                className={`${styles.navCategoriesContent} ${styles.navCategoriesButton} flex`}
              >
                <img src="img/category.svg" alt="" />
                <p>Категории</p>
                <img
                  src="img/arrow-down.svg"
                  className={`${styles.navCategoriesButtonMore}`}
                  alt=""
                />
              </div>
            </div>
            <div className={`${styles.navSearch}`}>
              <a href="#">
                <img src="img/microphone.svg" alt="" />
              </a>
              <input type="search" placeholder="Название товара..." />
              <button>
                <img src="img/search.svg" alt="" />
              </button>
            </div>
            <div className={`${styles.navMore}`}>
              <ul className="flex">
                <li>
                  <A href="/cart">
                    <img src="img/cart.svg" alt="" />
                  </A>
                </li>
                <li>
                  <A href="/favorites">
                    <img src="img/bookmark.svg" alt="" />
                  </A>
                </li>
                <li>
                  <A href="/compare">
                    <img src="img/compare-scales.svg" alt="" />
                  </A>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainNav;
