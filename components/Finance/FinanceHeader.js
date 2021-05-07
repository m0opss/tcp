import styles from "../../styles/finance.module.sass";

import A from "../A";

const FinanceHeader = ({ }) => {
  return (
    <>
      <div className={`${styles.verificationMainHeader} ${styles.flex} flex`}>
        <h2></h2>
        <div className={`${styles.verificationMainHeaderRight} ${styles.flex} flex`}>
          <div className={`${styles.verificationMainHeaderSearch}`}>
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

export default FinanceHeader;
