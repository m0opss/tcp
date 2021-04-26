import styles from "../../styles/account.module.sass";
import A from "../A";

const SettingsMainInfo = () => (
  // <div className={`${styles.accountMainAddress}`}>
  <div className={`${styles.settingsMainInfo}`}>
    <h3>Общие настройки</h3>
    <div className={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
      <div className={`${styles.settingsMainInfoInput}`}>
        <p>Имя на сайте</p>
        <input type="text" />
      </div>
      <div className={`${styles.settingsMainInfoInput}`}>
        <p>Язык сайта</p>
        <select name="" id="">
          <option value="">Русский</option>
        </select>
      </div>
      <div className={`${styles.settingsMainInfoInput}`}>
        <p>Валюта сайта</p>
        <select name="" id="">
          <option value="">USDT</option>
        </select>
      </div>
      <div className={`${styles.settingsMainInfoInput}`}>
        <p>Передача геоданных</p>
        <select name="" id="">
          <option value="">Вкл</option>
        </select>
      </div>
      <div className={`${styles.settingsMainInfoInput}`}>
        <p>Уведомления</p>
        <select name="" id="">
          <option value="">Системные</option>
        </select>
      </div>
    </div>
  </div>
);

export default SettingsMainInfo;
