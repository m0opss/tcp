import MainContainer from "../components/MainContainer";
import A from "../components/A";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import Head from "next/head";
import styles from "../styles/cart.module.sass";
import styles_nav from "../styles/Main/nav.module.sass";
// {`${styles.productItems} ${styles.flex} flex`}
const CartNav = () => (
  <nav id={`${styles_nav.nav}`}>
    <div className="container" style={{ position: "relative" }}>
      <div className={`${styles.menuMobileBlock} menuMobileBlock`}>
        <div
          className={`${styles.menuMobileBlockContent} menuMobileBlockContent flex`}
        >
          <div
            className={`${styles.menuMobileBlockContent1} menuMobileBlockContent1`}
          >
            <div
              className={`${styles.menuMobileBlockContent1Menu} menuMobileBlockContent1Menu`}
            >
              <ul>
                <li>
                  <a href="#">
                    <img src="" alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className={`${styles.menuMobileBlockContent2} menuMobileBlockContent2`}
          ></div>
        </div>
      </div>
      <div className={`${styles.navCategoriesBlock} ${styles.flex} flex`}>
        <div className="navCategoriesBlockMobile flex">
          <a href="#">
            <img src="img/computers.jpg" alt="" />
            <p>Ноутбуки и компьютеры</p>
          </a>
          <a href="#">
            <img src="img/phones.jpg" alt="" />
            <p>Смартфоны и электроника</p>
          </a>
          <a href="#">
            <img src="img/productsForGamers.jpg" alt="" />
            <p>Товары для геймеров</p>
          </a>
          <a href="#">
            <img src="img/stationery.jpg" alt="" />
            <p>Канцтовары и книги</p>
          </a>
          <a href="#">
            <img src="img/homes.jpg" alt="" />
            <p>Товары для дома</p>
          </a>
          <a href="#">
            <img src="img/auto.jpg" alt="" />
            <p>Инструменты и автотовары</p>
          </a>
          <a href="#">
            <img src="img/dacha.jpg" alt="" />
            <p>Дача и огород</p>
          </a>
          <a href="#">
            <img src="img/sport.jpg" alt="" />
            <p>Спорт и увлечения</p>
          </a>
          <a href="#">
            <img src="img/beauty.jpg" alt="" />
            <p>Красота и здоровье</p>
          </a>
        </div>
        <div className="navCategoriesBlockList">
          <ul>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
            <li>
              <img src="img/cat-1.png" alt="" />
              <a href="#">Ноутбуки и компьютеры</a>
              <img
                src="img/arrowRight.svg"
                className="navCategoriesBlockListArrow"
                alt=""
              />
            </li>
          </ul>
        </div>
        <div className="navCategoriesBlockPopularCategories">
          <h3>Популярные разделы</h3>
          <ul>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
            <li>
              <a href="#">Ноутбуки</a>
            </li>
          </ul>
        </div>
        <div className="navCategoriesBlockPopularCategories">
          <h3>Ноутбуки</h3>
          <ul>
            <li>
              <a href="#">Asus</a>
            </li>
            <li>
              <a href="#">Lenovo</a>
            </li>
            <li>
              <a href="#">DELL</a>
            </li>
            <li>
              <a href="#">Apple</a>
            </li>
            <li>
              <a href="#">Xiaomi</a>
            </li>
          </ul>
          <h3>Телефоны</h3>
          <ul>
            <li>
              <a href="#">Asus</a>
            </li>
            <li>
              <a href="#">Samsung</a>
            </li>
            <li>
              <a href="#">Xiaomi</a>
            </li>
            <li>
              <a href="#">Huawei</a>
            </li>
            <li>
              <a href="#">Asus</a>
            </li>
            <li>
              <a href="#">Fly</a>
            </li>
            <li>
              <a href="#">Surface</a>
            </li>
            <li>
              <a href="#">Redmi</a>
            </li>
          </ul>
        </div>
        <div className="navCategoriesBlockPopularCategories">
          <h3>Комплектующие</h3>
          <ul>
            <li>
              <a href="#">Asus</a>
            </li>
            <li>
              <a href="#">Lenovo</a>
            </li>
            <li>
              <a href="#">DELL</a>
            </li>
            <li>
              <a href="#">Apple</a>
            </li>
            <li>
              <a href="#">Xiaomi</a>
            </li>
          </ul>
          <h3>Планшеты</h3>
          <ul>
            <li>
              <a href="#">Asus</a>
            </li>
            <li>
              <a href="#">Samsung</a>
            </li>
            <li>
              <a href="#">Xiaomi</a>
            </li>
            <li>
              <a href="#">Huawei</a>
            </li>
            <li>
              <a href="#">Asus</a>
            </li>
            <li>
              <a href="#">Fly</a>
            </li>
            <li>
              <a href="#">Surface</a>
            </li>
            <li>
              <a href="#">Redmi</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex">
        <div className="navCategories">
          <img src="img/menu-mobile.svg" className="menuMobile" alt="" />
          <div className="navCategoriesContent navCategoriesButton flex">
            <img src="img/category.svg" alt="" />
            <p>Категории</p>
            <img
              src="img/arrow-down.svg"
              className="navCategoriesButtonMore"
              alt=""
            />
          </div>
        </div>
        <div className="navSearch">
          <a href="#">
            <img src="img/microphone.svg" alt="" />
          </a>
          <input type="search" placeholder="Название товара..." />
          <button>
            <img src="img/search.svg" alt="" />
          </button>
        </div>
        <div className="navMore">
          <ul className="flex">
            <li>
              <a href="#">
                <img src="img/cart.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/bookmark.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="img/compare-scales.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
);

const Cart = ({}) => {
  return (
    <>
      <Head>
        <script>
          {$(function () {
            $(".menuMobile").on("click", function (e) {
              e.preventDefault();
              $(this).toggleClass("menuMobile_active");
              $(".menuMobileBlock").toggleClass("menuMobileBlock_active");
            });
            $(".navCategoriesButton").on("click", function (e) {
              e.preventDefault();
              $(".navCategoriesBlock").toggleClass("navCategoriesBlock_active");
            });
          })}
        </script>
      </Head>
      <MainContainer keywords={"catalog page"}>
        <MainHeader />
        <CartNav />
        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Cart;
