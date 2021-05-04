import A from "../A";
import styles from "../../styles/Main/nav.module.sass";

const NavCategoriesBlockMobileItem = ({ img, title, link }) => (
  <A href={link}>
    <img src={img} alt="" />
    <p>{title}</p>
  </A>
);
const NavCategoriesBlockListItem = ({ img, title, link }) => (
  <li>
    <img src={img} alt="" />
    <a href={link}>{title}</a>
    <img
      src="img/arrowRight.svg"
      className={`${styles.navCategoriesBlockListArrow}`}
      alt=""
    />
  </li>
);
const NavCategoriesBlockPopularCategoriesItem = ({ title, obj }) => (
  <>
    <h3>{title}</h3>
    <ul>
      {Object.keys(obj).map((i, ind) => (
        <li key={i + ind}>
          <A href={i}>{obj[i]}</A>
        </li>
      ))}
    </ul>
  </>
);
const cat_pop = {
  "#1": "Ноутбуки",
  "#2": "Ноутбуки",
  "#3": "Ноутбуки",
  "#4": "Ноутбуки",
  "#5": "Ноутбуки",
  "#6": "Ноутбуки",
  "#7": "Ноутбуки",
  "#8": "Ноутбуки",
  "#9": "Ноутбуки",
  "#10": "Ноутбуки",
  "#11": "Ноутбуки",
  "#12": "Ноутбуки",
  "#13": "Ноутбуки",
  "#14": "Ноутбуки",
  "#15": "Ноутбуки",
  "#16": "Ноутбуки",
};
const cat_obj1 = {
  "#1": "Asus",
  "#2": "Lenovo",
  "#3": "DELL",
  "#4": "Apple",
  "#5": "Xiaomi",
};
const cat_obj2 = {
  "#1": "Asus",
  "#2": "Samsung",
  "#3": "Xiaomi",
  "#4": "Huawei",
  "#5": "Asus",
  "#6": "Fly",
  "#7": "Surface",
  "#8": "Redmi",
};

const MainNav = ({}) => {
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
    document
      .getElementsByClassName("navCategoriesBlock")[0]
      .classList.toggle("navCategoriesBlock_active");
  };

  return (
    <>
      <nav id={`${styles.nav}`}>
        <div className="container" style={{ position: "relative" }}>
          <div className={`${styles.menuMobileBlock} menuMobileBlock`}>
            <div className={`${styles.menuMobileBlockContent} flex`}>
              <div className={`${styles.menuMobileBlockContent1}`}>
                <div className={`${styles.menuMobileBlockContent1Menu}`}>
                  <ul>
                    <li>
                      <a href="#">
                        <img src="" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.menuMobileBlockContent2}`}></div>
            </div>
          </div>
          <div
            className={`${styles.navCategoriesBlock} navCategoriesBlock flex`}
          >
            <div className={`${styles.navCategoriesBlockMobile} flex`}>
              <NavCategoriesBlockMobileItem
                img="img/computers.jpg"
                title="Ноутбуки и компьютеры"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/phones.jpg"
                title="Смартфоны и электроника"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/productsForGamers.jpg"
                title="Товары для геймеров"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/stationery.jpg"
                title="Канцтовары и книги"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/homes.jpg"
                title="Товары для дома"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/auto.jpg"
                title="Инструменты и автотовары"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/dacha.jpg"
                title="Дача и огород"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/sport.jpg"
                title="Спорт и увлечения"
                link="#"
              />
              <NavCategoriesBlockMobileItem
                img="img/beauty.jpg"
                title="Красота и здоровье"
                link="#"
              />
            </div>
            <div className={`${styles.navCategoriesBlockList} navCategoriesBlockList`}>
              <ul>
                {[...Array(19).keys()].map((i) => (
                  <NavCategoriesBlockListItem
                    img="img/cat-1.png"
                    key={i}
                    title="Ноутбуки и компьютеры"
                    link="#"
                  />
                ))}
              </ul>
            </div>
            <div className={`${styles.navCategoriesBlockPopularCategories}`}>
              <NavCategoriesBlockPopularCategoriesItem
                title="Популярные разделы"
                obj={cat_pop}
              />
            </div>
            <div className={`${styles.navCategoriesBlockPopularCategories}`}>
              <NavCategoriesBlockPopularCategoriesItem
                title="Ноутбуки"
                obj={cat_obj1}
              />
              <NavCategoriesBlockPopularCategoriesItem
                title="Телефоны"
                obj={cat_obj2}
              />
            </div>
            <div className={`${styles.navCategoriesBlockPopularCategories}`}>
              <NavCategoriesBlockPopularCategoriesItem
                title="Комплектующие"
                obj={cat_obj1}
              />
              <NavCategoriesBlockPopularCategoriesItem
                title="Планшеты"
                obj={cat_obj2}
              />
            </div>
          </div>
          <div className="flex">
            <div className={`${styles.navCategories}`}>
              <img
                src="img/menu-mobile.svg"
                className={`${styles.menuMobile} menuMobile`}
                alt=""
                onClick={onClickMenuMobile}
              />
              <div
                onClick={onClickCategoriesButton}
                className={`${styles.navCategoriesContent} navCategoriesButton flex`}
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
                <img src="img/microphone.svg" alt="" />{' '}
              </a>
              <input type="search" placeholder="Название товара..." />{' '}
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
                  <A href="/comparison">
                    <img src="img/compare-scales.svg" alt="" />
                  </A>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <style jsx>{`
        .navCategoriesBlock_active,
        .menuMobileBlock_active {
          transform: scaleX(1) translateX(0);
          opacity: 1;
          visibility: visible;
        }
      `}</style>
    </>
  );
};

export default MainNav;
