import MainContainer from "../components/MainContainer";
import A from "../components/A";
import MainHeader from "../components/MainHeader";
import MainFooter from "../components/MainFooter";
import MainNav from "../components/Main/MainNav";
import styles from "../styles/cart.module.sass";

// {`${styles.productItems} ${styles.flex} flex`}
const CartPriceTotalItem = ({ title, value, addClass }) => (
  <div className={`${styles.cartPriceTotalItem} ${styles.flex} flex`}>
    <p className={styles.cartPriceTotalItem1}>{title}</p>
    <p
      className={`${
        addClass
          ? `${styles.cartPriceTotalItem2} ${addClass}`
          : styles.cartPriceTotalItem2
      }`}
    >
      {value}
    </p>
  </div>
);

const CartItemBlock = ({ img, title, rest, credit, usd }) => (
  <div className={`${styles.cartItemBlock} ${styles.flex} flex`}>
    <img src={img} alt="" />
    <div className={styles.cartItemBlockTitle}>
      <h3>{title}</h3>
      <div className={`${styles.cartItemBlockTitleCount} ${styles.flex} flex`}>
        <span>
          <img src="img/srMinus.svg" alt="" />
        </span>
        <input type="phone" />
        <span>
          <img src="img/srPlus.svg" alt="" />
        </span>
      </div>
      <p>
        Осталось шт: <span>{rest}</span>
      </p>
    </div>
    <div className={styles.cartItemBlockTitleMore}>
      <p>US {usd}</p>
      <p>TPC Credit: {credit}</p>
      <ul className={`${styles.cartItemBlockTitleMoreUl} ${styles.flex} flex`}>
        <li className={styles.cartItemBlockTitleMoreLi1}>
          <a href="#">
            <img src="img/srBookmark.svg" alt="" /> В избранное
          </a>
        </li>
        <li className={styles.cartItemBlockTitleMoreLi2}>
          <a href="#">
            <img src="img/srTrash.svg" alt="" /> Удалить
          </a>
        </li>
      </ul>
    </div>
  </div>
);

const CartContainer = () => (
  <div id={styles.cart}>
    <div className="container">
      <div className={`${styles.cartContent} ${styles.flex} flex`}>
        <div className={styles.cartItems}>
          <div className={`${styles.cartItemsTitle} ${styles.flex} flex`}>
            <h2>Корзина</h2>
            <p>
              Всего товаров: <strong>3</strong>
            </p>
          </div>
          <div className={styles.cartItemsBlock}>
            <CartItemBlock
              img="img/glasses.jpg"
              title="Солнцезащитные очки Гучи"
              rest={5}
              credit={1000}
              usd={135}
            />
            <CartItemBlock
              img="img/glasses.jpg"
              title="Солнцезащитные очки Гучи"
              rest={5}
              credit={1000}
              usd={135}
            />
            <CartItemBlock
              img="img/glasses.jpg"
              title="Солнцезащитные очки Гучи"
              rest={5}
              credit={1000}
              usd={135}
            />
          </div>
        </div>
        <div className={styles.cartPrice}>
          <div className={styles.cartPriceTotal}>
            <h3>Стоимость заказа</h3>
            <CartPriceTotalItem title="Товары" value="US 15 456" />
            <CartPriceTotalItem title="TPC Credit" value="1 000" />
            <CartPriceTotalItem title="Доставка" value="US 353.5" />
            <CartPriceTotalItem
              title="Всего к оплате"
              addClass={styles.cartPriceTotalItemT}
              value=" US 15 780"
            />
            <a href="#">Оформить заказ</a>
          </div>
          <div className={styles.cartPriceInsurance}>
            <div className={styles.cartPriceInsuranceBlock}>
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
