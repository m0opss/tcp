import { useState } from "react";
import styles from "../styles/header.module.sass";
import A from "./A";

const HeaderCurrenciesItem = ({ className, title, value, percent }) => (
  <div className={`${styles.headerCurrency} ${className}`}>
    <img
      className={styles.bitcoinLogo}
      width="16"
      height="24"
      src="img/bitcoin-header.svg"
    />
    <div className={`flex ${styles.flex}`}>
      <p>{title}</p>
      <span>
        <img src="img/topArrowHeader.svg" />
        {value.toFixed(4)}{" "}
        <strong>{percent > 0 ? `+ ${percent}` : percent}%</strong>
      </span>
    </div>
    <img
      className={styles.headerCurrencyDropArr}
      src="img/dropdown.svg"
      alt=""
    />
  </div>
);

const HeaderCurrencies = ({}) => (
  <div className={styles.headerCurrencies}>
    <HeaderCurrenciesItem
      className={styles.headerCurrency1}
      title="TCP Credit"
      value={0}
      percent={0.03}
    />
    <HeaderCurrenciesItem
      className={styles.headerCurrency2}
      title="TCP Credit"
      value={0.053}
      percent={15}
    />
    <HeaderCurrenciesItem
      className={styles.headerCurrency3}
      title="TCP Finance"
      value={0.053}
      percent={15}
    />
  </div>
);

const AccountMenu = ({ isAuth, setIsAuth }) => (
  <div className={styles.headerMenu}>
    {isAuth ? (
      <ul className="flex">
        <li>
          <A className={styles.headerMenuLogIn} href="#">
            <img src="img/log-in.svg" alt="" />
            <p>Огого</p>
          </A>
        </li>
      </ul>
    ) : (
      <ul className="flex">
        <li onClick={() => setIsAuth(isAuth => !isAuth)}>
          <A className={styles.headerMenuLogIn} href="#">
            <img src="img/log-in.svg" alt="" />
            <p>Войти</p>
          </A>
        </li>
      </ul>
    )}
  </div>
);

const MainHeader = ({}) => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <header id={styles.header}>
        <div className={`${styles.container} container`}>
          <div className={styles.headerWrapper}>
            <div className={styles.headerLogo}>
              <a href="/">
                <img className={styles.headerLogoDesc} src="img/logo.svg" alt="" />
                <img className={styles.headerLogoMob} src="img/pic.svg" alt="" />
              </a>
            </div>
            <HeaderCurrencies />
            <AccountMenu isAuth={isAuth} setIsAuth={setIsAuth} />
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
