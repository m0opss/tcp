import styles from "../../styles/account.module.sass";
import A from "../A";

const SettingsMainInfo = () => (
  // <div class={`${styles.accountMainAddress}`}>
  <div class={`${styles.settingsMainInfo}`}>
    <h3>Общие настройки</h3>
    <div class={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
      <div class={`${styles.settingsMainInfoInput}`}>
        <p>Имя на сайте</p>
        <input type="text" />
      </div>
      <div class={`${styles.settingsMainInfoInput}`}>
        <p>Язык сайта</p>
        <select name="" id="">
          <option value="">Русский</option>
        </select>
      </div>
      <div class={`${styles.settingsMainInfoInput}`}>
        <p>Валюта сайта</p>
        <select name="" id="">
          <option value="">USDT</option>
        </select>
      </div>
      <div class={`${styles.settingsMainInfoInput}`}>
        <p>Передача геоданных</p>
        <select name="" id="">
          <option value="">Вкл</option>
        </select>
      </div>
      <div class={`${styles.settingsMainInfoInput}`}>
        <p>Уведомления</p>
        <select name="" id="">
          <option value="">Системные</option>
        </select>
      </div>
    </div>
  </div>
);

export default SettingsMainInfo;
