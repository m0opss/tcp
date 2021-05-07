import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMainInfo = () => (
  <div className={`${styles.accountMainInfo}`}>
    <h3>Основная информация</h3>
    <div className={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
      <div className={`${styles.accountMainInfoInput}`}>
        <p>Имя</p>
        <input type="text" />
      </div>
      <div className={`${styles.accountMainInfoInput}`}>
        <p>Фамилия</p>
        <input type="text" />
      </div>
      <div className={`${styles.accountMainInfoInput}`}>
        <p>Отчество</p>
        <input type="text" />
      </div>
      <div className={`${styles.accountMainInfoInput}`}>
        <p>Пол</p>
        <select name="" id="">
          <option value="">Женский</option>
          <option value="">Мужской</option>
        </select>
      </div>
      <div className={`${styles.accountMainInfoInput}`}>
        <p>День рождения</p>
        <input type="date" />
      </div>
    </div>
  </div>
);

export default AccountMainInfo;
