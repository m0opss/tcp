import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMobileItem = ({ title, isFlex, children }) => (
  // <div className={`${styles.accountMainAddress}`}>
  <div className="accountMobileItem">
    <h3>Основная информация</h3>
    {isFlex ? (
      <div className={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
        {children}
      </div>
    ) : (
      { children }
    )}
  </div>
);

export default AccountMobileItem;
