import A from "../A";
import styles from "../../styles/Main/popular.module.sass";
import { GetStaticPaths } from "next";

const ProductItem = ({
  img,
  alt,
  name,
  link,
  category,
  categoryLink,
  cost_dol,
  cost_btc,
}) => (
  <div className={`${styles.productItem}`}>
    <A href={link}>
      <img src={img} alt={alt} />
      <h3>{name}</h3>
      <A href={categoryLink} className={`${styles.productItemCatalogBut}`}>
        {category}
      </A>
      <div className={`${styles.productItemPrice} flex`}>
        <div className={`${styles.productItemPriceCurrency} flex`}>
          <img src="img/dollar.svg" alt="" />
          <p>{cost_dol}</p>
        </div>
        <div className={`${styles.productItemPriceCryptocurrency} flex`}>
          <img src="img/bitcoin.svg" alt="" />
          <p>{cost_btc}</p>
        </div>
      </div>
      <div className={`${styles.productItemBuyBlock}`}>
        <h4>{name}</h4>
        <A href="#" className={`${styles.productItemBuyBlockLink}`}>
          {category}
        </A>
        <ul className={`flex`}>
          <li className={`flex`}>
            <img src="img/bookmarkItem.svg" alt="" />
            <a href="#">В избранное</a>
          </li>
          <li className={`flex`}>
            <img src="img/compareScalesItem.svg" alt="" />
            <a href="#">Сравнить</a>
          </li>
          <li className={`${styles.productItemBuyBlockButton} flex`}>
            <img src="img/cartItem.svg" alt="" />
            <a href="#">Купить</a>
          </li>
        </ul>
      </div>
    </A>
  </div>
);

const Popular = ({ items }) => {
  return (
    <>
      <div id={`${styles.popular}`}>
        <div className="container">
          <h2>
            Популярные{" "}
            <a href="#">
              <span>Товары и услуги</span>{" "}
              <img src="img/dropdownPopular.svg" alt="" />
            </a>
          </h2>

          <div className={`${styles.productItems} flex`}>
            {items.map((item) => (
              <ProductItem
                key={item.id}
                img={item.img}
                alt={item.name}
                name={item.name}
                link="#"
                category={item.category}
                categoryLink={item.categoryLink}
                cost_dol={item.cost_dol}
                cost_btc={item.cost_btc}
              />
            ))}
            <div className={`${styles.productItem}`}>
              <a href="#">
                <div className={`${styles.productItemMore}`}>
                  <img src="img/ellipse.svg" alt="" />
                  <p>Показать еще</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
