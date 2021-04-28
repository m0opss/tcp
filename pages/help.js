import MainContainer from "../components/MainContainer";
import HelpContainer from "../components/Help/HelpContainer";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/help.module.sass";

const SupportBlockListImg = ({ isActive, img, title, text }) => (
  <li className={`flex ${isActive ? "active" : ""}`}>
    <div className={styles.supportBlockListImg}>
      <img src={img} alt="" />
    </div>
    <div className={styles.supportBlockListTxt}>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  </li>
);

let testArr1 = [
  {
    img: "img/supportCard.svg",
    title: "Оплата",
    text:
      "информация о доступных способах оплаты и о том, как ими воспользоваться",
  },
  {
    img: "img/supportNotebook.svg",
    title: "Информация о товаре",
    text: "информация о том, как оформить заказ на сайте",
  },
  {
    img: "img/supportUser.svg",
    title: "Сайт и личный кабинет",
    text:
      "информация о регистрации на сайте, использовании личного кабинета и функционала сайта",
  },
  {
    img: "img/supportShieldCheck.svg",
    title: "Страхование",
    text: "информация о страховании товара на сайте",
  },
  {
    img: "img/supportShieldCheck.svg",
    title: "Страхование",
    text: "информация о страховании товара на сайте",
  },
];
let testArr2 = [
  {
    img: "img/supportBoxAlt.svg",
    title: "Доставка",
    text:
      "информация о сроках и способах доставки, условия получения и хранения",
  },
  {
    img: "img/supportCart.svg",
    title: "Помощь по заказу",
    text:
      "информация о том, как проверить статус заказа, отменить его или изменить срок резерва",
  },
  {
    img: "img/SupportRedo.svg",
    title: "Гарантия и возврат товара",
    text: "информация об оформлении и сопровождении заказов",
  },
  {
    img: "img/supportCheck.svg",
    title: "Кредитование",
    text:
      "информация о том, как проверить статус заказа, отменить его или изменить срок резерва",
  },
];

const Help = ({ pathname }) => {
  const isAuth = false;
  console.log();
  return (
    <>
      <MainContainer keywords={"support page"}>
        <MainHeader />
        <MainNav />

        <div id={styles.support}>
          <HelpContainer url={pathname.replace("/", "")}>
            <div className={styles.supportBlock}>
              <h2>Чем мы можем вам помочь?</h2>
              <div className={styles.supportBlockSearch}>
                <a href="#">
                  <img src="img/microphone.svg" alt="" />
                </a>
                <input type="search" placeholder="Название товара..." />
                <button>
                  <img src="img/search.svg" alt="" />
                </button>
              </div>
              <div className={`${styles.supportBlockList} flex`}>
                <ul>
                  {testArr1.map((i, ind) => (
                    <SupportBlockListImg
                      img={i.img}
                      key={i + ind}
                      title={i.title}
                      text={i.text}
                    />
                  ))}
                </ul>
                <ul>
                  {testArr2.map((i, ind) => (
                    <SupportBlockListImg
                      img={i.img}
                      key={i + ind}
                      title={i.title}
                      text={i.text}
                    />
                  ))}
                </ul>
              </div>
              <div className={styles.supportBlockTxt}>
                <h3>Оплата</h3>
                <ul>
                  <li>Какие виды оплаты есть на сайте?</li>
                  <li>Как оплатить товар по безналичному расчету?</li>
                  <li>Как оплатить товар картой?</li>
                  <li>Как оплатить товар по безналичному расчету?</li>
                </ul>
              </div>
            </div>
          </HelpContainer>
        </div>

        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Help;

Help.getInitialProps = ({ pathname }) => {
  return { pathname };
};
