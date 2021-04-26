import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMainContacts = () => (
  <div className={`${styles.accountMainContacts}`}>
    <h3>Контакты</h3>
    <div className={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
      <div className={`${styles.accountMainContactsInput}`}>
        <p>Email</p>
        <input type="text" />
      </div>
      <div className={`${styles.accountMainContactsInput}`}>
        <p>Телефон</p>
        <input type="tel" />
      </div>
      <div className={`${styles.accountMainContactsInput}`}>
        <p>Социальные сети</p>
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
      </div>
    </div>
  </div>
);

export default AccountMainContacts;
