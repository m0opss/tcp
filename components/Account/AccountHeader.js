import styles from "../../styles/account.module.sass";

import A from "../A";

const AccountHeader = ({ title }) => {
  return (
    <>
      <div className={`${styles.settingsMainHeader} ${styles.flex} flex`}>
        <h2>{title ? title : ""}</h2>
        <div className={`${styles.settingsMainHeaderRight} ${styles.flex} flex`}>
          <div className={`${styles.settingsMainHeaderSearch}`}>
            <input type="search" placeholder="Поиск" />
            <button>
              <img src="img/search.svg" alt="" />
            </button>
          </div>
          <ul>
            <li>
              <A href="cart">
                <img src="img/accountCart.svg" alt="" />
              </A>
            </li>
            <li>
              <A href="#">
                <img src="img/accountWallet.svg" alt="" />
              </A>
            </li>
            <li>
              <A href="#">
                <img src="img/accountNotifications.svg" alt="" />
              </A>
            </li>
            <li>
              <A href="account">
                <img src="img/ava.png" alt="" />
              </A>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default AccountHeader;
