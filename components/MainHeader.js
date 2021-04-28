import styles from "../styles/header.module.sass";
import A from "./A";

const MainHeader = () => {
  return (
    <>
      <header id={styles.header}>
        <div className="container">
          <div className="flex">
            <div className={styles.headerLogo}>
              <a href="/">
                <img src="img/logo.svg" alt="" />
              </a>
            </div>
            <div
              className={`${styles.headerCurrency} ${styles.headerCurrency1}`}
            >
              <div className={`flex ${styles.flex}`}>
                <img src="img/bitcoin-header.svg" alt="" />
                <p>TCP Cent</p>
                <img src="img/dropdown.svg" alt="" />
              </div>
              <p>
                0.053 <strong>+15%</strong>
              </p>
            </div>
            <div
              className={`${styles.headerCurrency} ${styles.headerCurrency2}`}
            >
              <div className={`flex ${styles.flex}`}>
                <img src="img/bitcoin-header.svg" alt="" />
                <p>TCP Credit</p>
                <img src="img/dropdown.svg" alt="" />
              </div>
              <p>
                1.53 <strong>+8.4%</strong>
              </p>
            </div>
            <div className={styles.headerMenu}>
              <ul className="flex">
                <li>
                  <a href="#">
                    <img src="img/messages.svg" alt="" />
                    <p>Уведомления</p>
                    <span>21</span>
                  </a>
                </li>
                <li>
                  <A className={styles.headerMenuLogIn} href="/auth">
                    <img src="img/log-in.svg" alt="" />
                    <p>Войти</p>
                  </A>

                  {/* <a href="#" className={styles.headerMenuLogIn}>
                    <img src="img/log-in.svg" alt="" />
                    <p>Войти</p>
                  </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
