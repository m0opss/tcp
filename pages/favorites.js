import MainContainer from "../components/MainContainer";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import MainNav from "../components/Main/MainNav";
import A from "../components/A";

import styles_f from "../styles/favorites.module.sass";
import styles from "../styles/Main/popular.module.sass";

const FavoritesItem = () => (
  <div className={`${styles.productItem}`}>
    <a href="#">
      <img src="img/prod-1.png" alt="" />
      <h3>Ноутбук Samsung B6-E54312</h3>
      <a href="#" className={`${styles.productItemCatalogBut}`}>
        Компьютерная техника
      </a>
      <div className={`${styles.productItemPrice} ${styles_f.flex} flex`}>
        <div
          className={`${styles.productItemPriceCurrency} ${styles_f.flex} flex`}
        >
          <img src="img/dollar.svg" alt="" />
          <p>24</p>
        </div>
        <div
          className={`${styles.productItemPriceCryptocurrency} ${styles_f.flex} flex`}
        >
          <img src="img/bitcoin.svg" alt="" />
          <p>13 616</p>
        </div>
      </div>
      <div className={`${styles.productItemBuyBlock}`}>
        <h4>Ноутбук Samsung B6-E54312</h4>
        <a href="#" className={`${styles.productItemBuyBlockLink}`}>
          Компьютерная техника
        </a>
        <ul className={`${styles_f.flex} flex`}>
          <li className={`${styles_f.flex} flex`}>
            <img src="img/removeItem.svg" alt="" />
            <a href="#">Удалить</a>
          </li>
          <li
            className={`${styles.productItemBuyBlockButton} ${styles_f.flex} flex`}
          >
            <img src="img/cartItem.svg" alt="" />
            <a href="#">Купить</a>
          </li>
        </ul>
      </div>
    </a>
  </div>
);

const Favorites = ({}) => {
  return (
    <>
      <MainContainer keywords={"catalog page"}>
        <MainHeader />
        <MainNav />
        <div id={`${styles_f.favorites}`}>
          <div className="container">
            <div className={`${styles_f.flex} flex`}>
              <h2>Избранное</h2>
              <ul className={`${styles_f.favoritesUl}`}>
                <li>
                  <a href="#" className={`${styles_f.favoritesAllBuy}`}>
                    Купить все
                  </a>
                </li>
                <li>
                  <a href="#" className={`${styles_f.favoritesAllDelete}`}>
                    Удалить все
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${styles.productItems} ${styles_f.flex} flex`}>
              <FavoritesItem />
              <FavoritesItem />
              <FavoritesItem />
              <FavoritesItem />
              <FavoritesItem />
              
            </div>
          </div>
        </div>
        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Favorites;
