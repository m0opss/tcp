import MainContainer from "../components/MainContainer";
import A from "../components/A";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import MainNav from "../components/Main/MainNav";
import Head from "next/head";
import styles from "../styles/cart.module.sass";
import styles_nav from "../styles/Main/nav.module.sass";
// {`${styles.productItems} ${styles.flex} flex`}

const CartContainer = () => (
  <div id="cart">
    <div className="container">
      <div className="cartContent flex">
        <div className="cartItems">
          <div className="cartItemsTitle flex">
            <h2>Корзина</h2>
            <p>
              Всего товаров: <strong>3</strong>
            </p>
          </div>
          <div className="cartItemsBlock">
            <div className="cartItemBlock flex">
              <img src="img/glasses.jpg" alt="" />
              <div className="cartItemBlockTitle">
                <h3>Солнцезащитные очки Гучи</h3>
                <div className="cartItemBlockTitleCount flex">
                  <span>
                    <img src="img/srMinus.svg" alt="" />
                  </span>
                  <input type="phone" />
                  <span>
                    <img src="img/srPlus.svg" alt="" />
                  </span>
                </div>
                <p>
                  Осталось шт: <span>5</span>
                </p>
              </div>
              <div className="cartItemBlockTitleMore">
                <p>US 135</p>
                <p>TPC Credit: 1 000</p>
                <ul className="cartItemBlockTitleMoreUl flex">
                  <li className="cartItemBlockTitleMoreLi1">
                    <a href="#">
                      <img src="img/srBookmark.svg" alt="" /> В избранное
                    </a>
                  </li>
                  <li className="cartItemBlockTitleMoreLi2">
                    <a href="#">
                      <img src="img/srTrash.svg" alt="" /> Удалить
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cartItemBlock flex">
              <img src="img/glasses.jpg" alt="" />
              <div className="cartItemBlockTitle">
                <h3>Солнцезащитные очки Гучи</h3>
                <div className="cartItemBlockTitleCount flex">
                  <span>
                    <img src="img/srMinus.svg" alt="" />
                  </span>
                  <input type="phone" />
                  <span>
                    <img src="img/srPlus.svg" alt="" />
                  </span>
                </div>
                <p>
                  Осталось шт: <span>5</span>
                </p>
              </div>
              <div className="cartItemBlockTitleMore">
                <p>US 135</p>
                <p>TPC Credit: 1 000</p>
                <ul className="cartItemBlockTitleMoreUl flex">
                  <li className="cartItemBlockTitleMoreLi1">
                    <a href="#">
                      <img src="img/srBookmark.svg" alt="" /> В избранное
                    </a>
                  </li>
                  <li className="cartItemBlockTitleMoreLi2">
                    <a href="#">
                      <img src="img/srTrash.svg" alt="" /> Удалить
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="cartItemBlock flex">
              <img src="img/glasses.jpg" alt="" />
              <div className="cartItemBlockTitle">
                <h3>Солнцезащитные очки Гучи</h3>
                <div className="cartItemBlockTitleCount flex">
                  <span>
                    <img src="img/srMinus.svg" alt="" />
                  </span>
                  <input type="phone" />
                  <span>
                    <img src="img/srPlus.svg" alt="" />
                  </span>
                </div>
                <p>
                  Осталось шт: <span>5</span>
                </p>
              </div>
              <div className="cartItemBlockTitleMore">
                <p>US 135</p>
                <p>TPC Credit: 1 000</p>
                <ul className="cartItemBlockTitleMoreUl flex">
                  <li className="cartItemBlockTitleMoreLi1">
                    <a href="#">
                      <img src="img/srBookmark.svg" alt="" /> В избранное
                    </a>
                  </li>
                  <li className="cartItemBlockTitleMoreLi2">
                    <a href="#">
                      <img src="img/srTrash.svg" alt="" /> Удалить
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="cartPrice">
          <div className="cartPriceTotal">
            <h3>Стоимость заказа</h3>
            <div className="cartPriceTotalItem flex">
              <p className="cartPriceTotalItem1">Товары</p>
              <p className="cartPriceTotalItem2">US 15 456</p>
            </div>
            <div className="cartPriceTotalItem flex">
              <p className="cartPriceTotalItem1">TPC Credit</p>
              <p className="cartPriceTotalItem2">1 000</p>
            </div>
            <div className="cartPriceTotalItem flex">
              <p className="cartPriceTotalItem1">Доставка</p>
              <p className="cartPriceTotalItem2">US 353.5</p>
            </div>
            <div className="cartPriceTotalItem flex">
              <p className="cartPriceTotalItem1">Всего к оплате</p>
              <p className="cartPriceTotalItem2 cartPriceTotalItemT">
                US 15 780
              </p>
            </div>
            <a href="#">Оформить заказ</a>
          </div>
          <div className="cartPriceInsurance">
            <div className="cartPriceInsuranceBlock">
              <h3>Страхование товаров</h3>
              <select className="" name="">
                <option value="">%</option>
              </select>
            </div>
            <h4>Условия страхования</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Cart = ({}) => {
  return (
    <>
      <MainContainer keywords={"catalog page"}>
        <MainHeader />
        <MainNav />
        <CartContainer />
        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Cart;
