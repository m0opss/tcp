import A from "../A";
import styles from "../../styles/Main/main.module.sass";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const CarouselItem = ({ img, alt, textEl }) => (
  <div className={`${styles.mainBannerItem} flex`}>
    <div className={`${styles.mainBannerItemImg}`}>
      <img src={img} alt={alt} />
    </div>
    <div className={`${styles.mainBannerItemTxt}`}>{textEl}</div>
  </div>
);

const MainBanner = ({ children, keywords }) => {

  return (
    <>
      <Head>
      <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>
      <div className={`${styles.mainBanner}`}>
        <OwlCarousel
          items={1}
          className={`${styles["owl-carousel"]} ${styles["owl-theme"]} owl-theme`}
          loop
          margin={8}
        >
          <CarouselItem
            img="img/banner-1.png"
            alt=""
            textEl={
              <>
                <h2>До 12 апреля</h2>
                <p>Мы снизили цены на детскую продукцию до 55%</p>
                <a href="#">
                  Перейти в&#160;<strong>Детские товары</strong>{" "}
                  <img src="img/arrow-right.svg" alt="" />
                </a>
              </>
            }
          />
          <CarouselItem
            img="img/banner-1.png"
            alt=""
            textEl={
              <>
                <h2>До 12 апреля</h2>
                <p>Мы снизили цены на детскую продукцию до 55%</p>
                <a href="#">
                  Перейти в&#160;<strong>Детские товары</strong>{" "}
                  <img src="img/arrow-right.svg" alt="" />
                </a>
              </>
            }
          />
          <CarouselItem
            img="img/banner-1.png"
            alt=""
            textEl={
              <>
                <h2>До 12 апреля</h2>
                <p>Мы снизили цены на детскую продукцию до 55%</p>
                <a href="#">
                  Перейти в&#160;<strong>Детские товары</strong>{" "}
                  <img src="img/arrow-right.svg" alt="" />
                </a>
              </>
            }
          />
          <CarouselItem
            img="img/banner-1.png"
            alt=""
            textEl={
              <>
                <h2>До 12 апреля</h2>
                <p>Мы снизили цены на детскую продукцию до 55%</p>
                <a href="#">
                  Перейти в&#160;<strong>Детские товары</strong>{" "}
                  <img src="img/arrow-right.svg" alt="" />
                </a>
              </>
            }
          />
          <CarouselItem
            img="img/banner-1.png"
            alt=""
            textEl={
              <>
                <h2>До 12 апреля</h2>
                <p>Мы снизили цены на детскую продукцию до 55%</p>
                <a href="#">
                  Перейти в&#160;<strong>Детские товары</strong>{" "}
                  <img src="img/arrow-right.svg" alt="" />
                </a>
              </>
            }
          />
          <CarouselItem
            img="img/banner-1.png"
            alt=""
            textEl={
              <>
                <h2>До 12 апреля</h2>
                <p>Мы снизили цены на детскую продукцию до 55%</p>
                <a href="#">
                  Перейти в&#160;<strong>Детские товары</strong>{" "}
                  <img src="img/arrow-right.svg" alt="" />
                </a>
              </>
            }
          />
          <CarouselItem
            img="img/banner-1.png"
            alt=""
            textEl={
              <>
                <h2>До 12 апреля</h2>
                <p>Мы снизили цены на детскую продукцию до 55%</p>
                <a href="#">
                  Перейти в&#160;<strong>Детские товары</strong>{" "}
                  <img src="img/arrow-right.svg" alt="" />
                </a>
              </>
            }
          />
        </OwlCarousel>
        <div className={`${styles.mainGraphics} flex`}>
          <div
            className={`${styles.mainGraphicsSoldInAMonth} ${styles.mainGraphicsItem}`}
          >
            <h3>Продано за месяц</h3>
            <ul className={`${styles.mainGraphicsItemName}`}>
              <li className="flex">
                <div
                  className={`${styles.mainGraphicsItemPoint}`}
                  style={{ background: "#73C8EB" }}
                ></div>
                Товары
              </li>
              <li className="flex">
                <div
                  className={`${styles.mainGraphicsItemPoint}`}
                  style={{ background: "#9182F0" }}
                ></div>
                Услуги
              </li>
            </ul>
          </div>
          <div
            className={`${styles.mainGraphicsUserRevenue} ${styles.mainGraphicsItem}`}
          >
            <h3>Доход пользователей</h3>
          </div>
        </div>
        {/* <div className={`${styles.mainBanneritem} flex`}>
            <div className={`${styles.mainBanneritemImg}`}>
              <img src="img/banner-1.png" alt="" />
            </div>
            <div className={`${styles.mainBanneritemTxt}`}>
              <h2>До 12 апреля</h2>
              <p>Мы снизили цены на детскую продукцию до 55%</p>
              <a href="#">
                Перейти в&#160;<strong>Детские товары</strong>{" "}
                <img src="img/arrow-right.svg" alt="" />
              </a>
            </div>
          </div> */}
      </div>
    </>
  );
};

export default MainBanner;
