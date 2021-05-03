import styles from "../../styles/account.module.sass";
import A from "../A";
import AccountMobileItemContainer from "./AccountMobileItemContainer";

const AccountMobile = () => (
  <div className={`${styles.accountMobile}`}>
    <AccountMobileItemContainer title="Основная информация" isFlex={true}>
      <>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Имя</p>
          <input type="text" />
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Аватар</p>
          <a href="#">Изменить</a>
          <img src="img/ava.png" alt="" />
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Фамилия</p>
          <input type="text" />
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Пол</p>
          <select name="" id="">
            <option value="">Женский</option>
          </select>
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Отчество</p>
          <input type="text" />
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>День рождения</p>
          <input type="date" />
        </div>
      </>
    </AccountMobileItemContainer>
    <AccountMobileItemContainer title="Адрес" isFlex={true}>
      <>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Страна</p>
          <select name="" id="">
            <option value="">Россия</option>
          </select>
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Город</p>
          <input type="text" />
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Улица</p>
          <input type="text" />
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Дом</p>
          <input type="text" />
        </div>
        <div className={`${styles.accountMobileItemInput}`}>
          <p>Квартира</p>
          <input type="text" />
        </div>
      </>
    </AccountMobileItemContainer>
    <AccountMobileItemContainer title="Социальные сети" isFlex={false}>
      <ul>
        <li>
          <a href="#">
            <img src="img/accountFacebook.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/accountTwitter.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/accountGoogle.svg" alt="" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src="img/accountApple.svg" alt="" />
          </a>
        </li>
      </ul>
    </AccountMobileItemContainer>
  </div>
);

export default AccountMobile;
