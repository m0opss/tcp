import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMainAddress = () => (
  <div class={`${styles.accountMainAddress}`}>
    <h3>Основная информация</h3>
    <div class={`${styles.flex}`} style={{ flexWrap: "wrap" }}>
      <div class={`${styles.accountMainAddressInput}`}>
        <p>Страна</p>
        <select name="" id="">
          <option value="">Украина</option>ъ
        </select>
      </div>
      <div class={`${styles.accountMainAddressInput}`}>
        <p>Город</p>
        <select name="" id="">
          <option value="">Харьков</option>ъ
        </select>
      </div>
      <div class={`${styles.accountMainAddressInput}`}>
        <p>Улица</p>
        <input type="text" />
      </div>
      <div class={`${styles.accountMainAddressInput}`}>
        <p>Дом</p>
        <input type="text" />
      </div>
      <div class={`${styles.accountMainAddressInput}`}>
        <p>Квартира</p>
        <input type="text" />
      </div>
    </div>
  </div>
);

export default AccountMainAddress;
