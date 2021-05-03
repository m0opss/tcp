import styles from "../../styles/account.module.sass";
import A from "../A";
import SettingsMobileItemContainer from "./SettingsMobileItemContainer";

const SettingsMobile = () => (
  <div className={`${styles.accountMobile}`}>
    <SettingsMobileItemContainer title="Общие настройки" isFlex={true}>
      <>
        <div className={`${styles.settingsMobileItemInput}`}>
          <p>Никнейм</p>
          <input type="text" />
        </div>
        <div className={`${styles.settingsMobileItemInput}`}>
          <p>Язык сайта</p>
          <select name="" id="">
            <option value="">Русский</option>
          </select>
        </div>
        <div className={`${styles.settingsMobileItemInput}`}>
          <p>Валюта сайта</p>
          <select name="" id="">
            <option value="">USDT</option>
          </select>
        </div>
        <div className={`${styles.settingsMobileItemInput}`}>
          <p>Передача геоданных</p>
          <select name="" id="">
            <option value="">Вкл</option>
          </select>
        </div>
        <div className={`${styles.settingsMobileItemInput}`}>
          <p>Уведомления</p>
          <select name="" id="">
            <option value="">Системные</option>
          </select>
        </div>
      </>
    </SettingsMobileItemContainer>
    <SettingsMobileItemContainer title="Данные входа" isFlex={false}>
      <>
        <div className={`${styles.settingsMobileItemInput}`}>
          <p>Логин</p>
          <input type="text" />
          <a href="#">Изменить</a>
        </div>
        <div className={`${styles.settingsMobileItemInput}`}>
          <p>Пароль</p>
          <input type="password" />
          <a href="#">Изменить</a>
        </div>
      </>
    </SettingsMobileItemContainer>
    <SettingsMobileItemContainer title="Двойная аутентификация" isFlex={false}>
      <div className="flex">
        <div className={`${styles.settingsMobileItemButton}`}>
          <div className={`${styles.settingsMobileItemButtonToggle}`}></div>
        </div>
        <p className={`${styles.settingsMobileItemButtonP}`}>
          Включить двойную аутентификацию
        </p>
      </div>
    </SettingsMobileItemContainer>
  </div>
);

export default SettingsMobile;
