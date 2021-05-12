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
  <div href={link} className={styles.productItem}>
    <div className={styles.productItemImgContainer}>
      <img src={img} alt={alt} />
    </div>
    <h3 className={styles.productItemTitle}>{name}</h3>
    <div className={styles.productItemRate}>
      <div className={styles.productItemRateStars}>
        <span className={styles.productItemRateStarsActive}></span>
        <span className={styles.productItemRateStarsActive}></span>
        <span className={styles.productItemRateStarsActive}></span>
        <span></span>
        <span></span>
      </div>
      <p className={styles.productItemRateDec}>3.6</p>
    </div>
    <div className={styles.productItemAuc}>
      <img src="img/auction.svg" alt="" />
      <p>Аукционный лот</p>
    </div>
    <div className={styles.productItemPrice}>
      <p>Цена в нац. валюте</p>
      <p>Цена в TPC Credit</p>
    </div>
    <img
      className={styles.productItemFavoritesIcon}
      src="img/MainItemFavoritesIcon.svg"
      alt=""
    />
    <img
      className={styles.productItemCompareIcon}
      src="img/MainItemCompareIcon.svg"
      alt=""
    />
    <img
      className={styles.productItemCartIcon}
      src="img/MainItemCartIcon.svg"
      alt=""
    />
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
              <span>товары и услуги</span>
              <img src="img/dropdownPopular.svg" alt="" />
            </a>
          </h2>

          <div className={`${styles.productItems}`}>
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
            {/* <div className={`${styles.productItem}`}>
              <a href="#">
                <div className={`${styles.productItemMore}`}>
                  <img src="img/ellipse.svg" alt="" />
                  <p>Показать еще</p>
                </div>
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Popular;
