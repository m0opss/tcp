import Slider from "react-slick";
import A from "../A";
import styles from "../../styles/Main/main.module.sass";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import React from "react";

const CarouselItem = ({ img, alt, textEl }) => (
  <div className={`${styles.mainBannerItem} flex`}>
    <div className={`${styles.mainBannerItemImg}`}>
      <img src={img} alt={alt} />
    </div>
    <div className={`${styles.mainBannerItemTxt}`}>{textEl}</div>
  </div>
);

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} customArrow`}
      style={{ ...style}}
      onClick={onClick}
      src='img/slickPrev.svg'
    />
  );
}
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <img
      className={`${className} customArrow`}
      style={{ ...style}}
      onClick={onClick}
      src='img/slickNext.svg'
    />
  );
}

const MainBanner = ({ children, keywords }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const settings_thumbs = {
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    swipeToSlide: true,
    focusOnSelect: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />
  };

  const [nav1, setNav1] = React.useState(null);
  const [nav2, setNav2] = React.useState(null);
  let slider1 = [];
  let slider2 = [];

  React.useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  }, [slider1, slider2]);

  return (
    <>
      <Head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>
      <div className={`${styles.mainBanner}`}>
        <div className="mainSlider">
          <Slider
            asNavFor={nav2}
            ref={(slider) => (slider1 = slider)}
            {...settings}
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
          </Slider>
        </div>
        <div className="thumbs">
          <Slider
            asNavFor={nav1}
            ref={(slider) => (slider2 = slider)}
            {...settings_thumbs}
          >
            <div className='thumbsBannerItem'><img src='img/banner-1.png'/></div>
            <div className='thumbsBannerItem'><img src='img/banner-1.png'/></div>
            <div className='thumbsBannerItem'><img src='img/banner-1.png'/></div>
            <div className='thumbsBannerItem'><img src='img/banner-1.png'/></div>
            <div className='thumbsBannerItem'><img src='img/banner-1.png'/></div>
            <div className='thumbsBannerItem'><img src='img/banner-1.png'/></div>
            <div className='thumbsBannerItem'><img src='img/banner-1.png'/></div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default MainBanner;
