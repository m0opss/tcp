import styles from "../../styles/account.module.sass";

const SettingsMobileItemContainer = ({ title, isFlex, children }) => {
  return (
    <div className={`${styles.settingsMobileItem}`}>
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

export default SettingsMobileItemContainer;
