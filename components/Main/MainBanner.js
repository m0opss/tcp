import A from "../A";
import styles from "../../styles/Main/main.module.sass";

// import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Head from "next/head";
import dynamic from "next/dynamic";
import $ from "jquery";
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
  if (process.browser) {
    // Client-side-only code
    $(window.document).ready(function () {
      var sync1 = $("#sync1");
      var sync2 = $("#sync2");
      var slidesPerPage = 4; //globaly define number of elements per page
      var syncedSecondary = true;

      sync1
        .owlCarousel({
          items: 1,
          slideSpeed: 2000,
          nav: true,
          autoplay: false,
          dots: true,
          loop: true,
          responsiveRefreshRate: 200,
          navText: [
            '<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>',
            '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>',
          ],
        })
        .on("changed.owl.carousel", syncPosition);

      sync2
        .on("initialized.owl.carousel", function () {
          sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
          items: slidesPerPage,
          dots: true,
          nav: true,
          smartSpeed: 200,
          slideSpeed: 500,
          slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
          responsiveRefreshRate: 100,
        })
        .on("changed.owl.carousel", syncPosition2);

      function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
          current = count;
        }
        if (current > count) {
          current = 0;
        }
        sync2
          .find(".owl-item")
          .removeClass("current")
          .eq(current)
          .addClass("current");
        var onscreen = sync2.find(".owl-item.active").length - 1;
        var start = sync2.find(".owl-item.active").first().index();
        var end = sync2.find(".owl-item.active").last().index();

        if (current > end) {
          sync2.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
          sync2.data("owl.carousel").to(current - onscreen, 100, true);
        }
      }

      function syncPosition2(el) {
        if (syncedSecondary) {
          var number = el.item.index;
          sync1.data("owl.carousel").to(number, 100, true);
        }
      }

      sync2.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data("owl.carousel").to(number, 300, true);
      });
    });
  }
  return (
    <>
      <Head>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
      </Head>
      <div className={`${styles.mainBanner}`}>
        <div id="sync1" class="owl-carousel owl-theme">
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
        </div>
        {/* <OwlCarousel
          items={1}
          className={`${styles["owl-carousel"]} ${styles["owl-theme"]} owl-theme`}
          loop
          margin={8}
        > */}
        <div id="sync2" class="owl-carousel owl-theme">
          <div class="item">
            <h1>1</h1>
          </div>
        </div>
        {/* <CarouselItem
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
          /> */}
        {/* </OwlCarousel> */}
      </div>
    </>
  );
};

export default MainBanner;
