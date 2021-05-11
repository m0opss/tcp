import A from "../A";
import styles from "../../styles/Main/nav.module.sass";

const menuContent = [
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Аккаунт",
    descr: "Настройки и управление учетной записью пользователя",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Кошелек",
    descr: "Управление финанцами и активами ",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Мой магазин ",
    descr: "Тарговля на площадке TCP Market",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Блог",
    descr: "Новости и события Trade Change Place",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Благотворительность",
    descr: "Помощь людям, животным и странам 3 мира",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Пасивный доход",
    descr: "Получение пасивного дохода",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "De-Fi",
    descr: "Управление финанцами и активами ",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Инвестирование",
    descr: "Управление финанцами и активами ",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Кридитование",
    descr: "Кридитование пользователей ",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Страхование",
    descr: "Страхование товаров, жизни, имущиства и прочего",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Реферальная программа",
    descr: "Зарабатывай приглашая новых пользователей на площадку",
  },
  {
    link: "/",
    img: "img/menuBlock/account.svg",
    title: "Помощь",
    descr: "Поддержка пользователя и база знаний Trade Change Place",
  },
];

const MenuMobileBlock = () => (
  <div className={`${styles.menuMobileBlock} menuMobileBlock`}>
    <div className={`${styles.menuMobileBlockContent}`}>
      <div className={`${styles.menuMobileBlockContentMenu}`}>
        <ul>
          {menuContent.map((i) => (
            <li>
              <A href={i.link} className={`${styles.menuMobileBlockMenuLink}`}>
                <img src={i.img} />
                <div className="">
                  <p>{i.title}</p>
                  <p>{i.descr}</p>
                </div>
              </A>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <div className={`${styles.menuMobileBlockContent2}`}></div>

    <style jsx>{`
      .menuMobileBlock_active {
        transform: scaleX(1) translateX(0);
        opacity: 1;
        visibility: visible;
      }
    `}</style>
  </div>
);

export default MenuMobileBlock;
