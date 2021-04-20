import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountMainContacts = () => (
  <div class={`${styles.accountMainContacts}`}>
    <h3>Контакты</h3>
    <div class={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
      <div class={`${styles.accountMainContactsInput}`}>
        <p>Email</p>
        <input type="text" />
      </div>
      <div class={`${styles.accountMainContactsInput}`}>
        <p>Телефон</p>
        <input type="tel" />
      </div>
      <div class={`${styles.accountMainContactsInput}`}>
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
