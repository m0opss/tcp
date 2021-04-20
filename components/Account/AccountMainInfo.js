import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMainInfo = () => (
  <div class={`${styles.accountMainInfo}`}>
    <h3>Основная информация</h3>
    <div class={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
      <div class={`${styles.accountMainInfoInput}`}>
        <p>Имя</p>
        <input type="text" />
      </div>
      <div class={`${styles.accountMainInfoInput}`}>
        <p>Фамилия</p>
        <input type="text" />
      </div>
      <div class={`${styles.accountMainInfoInput}`}>
        <p>Отчество</p>
        <input type="text" />
      </div>
      <div class={`${styles.accountMainInfoInput}`}>
        <p>Пол</p>
        <select name="" id="">
          <option value="">Женский</option>
          <option value="">Мужской</option>
        </select>
      </div>
      <div class={`${styles.accountMainInfoInput}`}>
        <p>День рождения</p>
        <input type="date" />
      </div>
    </div>
  </div>
);

export default AccountMainInfo;
