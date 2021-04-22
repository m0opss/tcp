import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMobileItem = ({ title, isFlex, children }) => (
  // <div class={`${styles.accountMainAddress}`}>
  <div class="accountMobileItem">
    <h3>Основная информация</h3>
    {isFlex ? (
      <div class={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
        {children}
      </div>
    ) : (
      { children }
    )}
  </div>
);

export default AccountMobileItem;
