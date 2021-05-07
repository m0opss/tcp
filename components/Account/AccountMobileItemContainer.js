import styles from "../../styles/account.module.sass";

const AccountMobileItemContainer = ({ title, isFlex, children }) => {
  return (
    <div className={`${styles.accountMobileItem}`}>
      <h3>{title}</h3>
      {isFlex ? (
        <div className={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default AccountMobileItemContainer;
