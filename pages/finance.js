import AccountMainInfo from "../components/Account/AccountMainInfo";
import AccountMainContacts from "../components/Account/AccountMainContacts";
import AccountMainAddress from "../components/Account/AccountMainAddress";
import AccountContainer from "../components/Account/AccountContainer";
import styles from "../styles/finance.module.sass";

const FinanceHistoryItem = ({ type, date, change, totalSum }) => (
  <div className={`${styles.financeHistoryItem} ${styles.flex} flex`}>
    <img src="img/download.svg" alt="" />
    <div className={`${styles.financeHistoryItemTitle}`}>
      <h4>{type == "add" ? "Пополнение баланса" : ""}</h4>
      <p>{date}</p>
    </div>
    <p className={`${styles.financeHistoryItemTether}`}>500 Tether</p>
    <div className={`${styles.financeHistoryItemPrice}`}>
      <p>{change}</p>
      <span>{totalSum}</span>
    </div>
  </div>
);

const Finance = ({ pathname }) => {
  return (
    <>
      <AccountContainer pathname={pathname} >
        <div className={`${styles.flex} flex`}>
          <div className={`${styles.financeHistory}`}>
            <div
              className={`${styles.financeHistoryTitle} ${styles.flex} flex`}
            >
              <h3>История</h3>
              <a href="#">
                <img src="img/dotsThreeVertical.svg" alt="" />
              </a>
            </div>
            <FinanceHistoryItem
              type="add"
              date="23 апреля в 17:54"
              change="+500 USDT"
              totalSum="23.500 USDT"
            />
            <FinanceHistoryItem
              type="add"
              date="23 апреля в 17:54"
              change="+500 USDT"
              totalSum="23.500 USDT"
            />
            <FinanceHistoryItem
              type="add"
              date="23 апреля в 17:54"
              change="+500 USDT"
              totalSum="23.500 USDT"
            />
            <FinanceHistoryItem
              type="add"
              date="23 апреля в 17:54"
              change="+500 USDT"
              totalSum="23.500 USDT"
            />
            <FinanceHistoryItem
              type="add"
              date="23 апреля в 17:54"
              change="+500 USDT"
              totalSum="23.500 USDT"
            />
          </div>
          <div className={`${styles.financeBalance}`}></div>
        </div>
      </AccountContainer>
    </>
  );
};

export default Finance;

Finance.getInitialProps = ({ pathname }) => {
  return { pathname };
};
