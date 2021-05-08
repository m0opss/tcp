import A from "../A";
import styles from "../../styles/Main/main.module.sass";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import dynamic from "next/dynamic";

// const OwlCarousel =() => (

// )
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
        {/* <OwlCarousel
          items={1}
          className={`${styles["owl-carousel"]} ${styles["owl-theme"]} owl-theme`}
          loop
          margin={8}
        >
          <div class="item">
            <h1>1</h1>
          </div>
          <div class="item">
            <h1>23</h1>
          </div>
          <div class="item">
            <h1>33</h1>
          </div>
          <div class="item">
            <h1>43</h1>
          </div>
          <div class="item">
            <h1>53</h1>
          </div>
          <div class="item">
            <h1>63</h1>
          </div>
          <div class="item">
            <h1>73</h1>
          </div>
        </OwlCarousel> */}


      </div>
    </>
  );
};

export default MainBanner;
