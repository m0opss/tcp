import styles from "../../styles/account.module.sass";

export const ChangingLogin = ({ login, setLogin, setLoginChanging }) => (
  <div class={`${styles.flex}`} style={{ flexWrap: "wrap" }}>
    <div class={`${styles.settingsMainDataChangeLoginInputLink}`}>
      <p>Старый логин</p>
      <input type="text" />
    </div>
    <div class={`${styles.settingsMainDataChangeLoginInputLink}`}>
      <p>Новый логин</p>
      <input type="text" />
    </div>
    <div class={`${styles.settingsMainDataChangeLoginInputLink}`}>
      <p>Новый пароль</p>
      <input type="text" />
    </div>
    <a href="#" style="color: #73C8EB;">
      Изменить
    </a>
    <a href="#" style="color: #A5B4C3;" onClick={() => setLoginChanging(false)}>
      Отменить
    </a>
  </div>
);

export const DefaultLogin = ({ login, setLogin, setLoginChanging }) => (
  <div class={`${styles.settingsMainDataInputLink}`}>
    <p>Логин</p>
    <input
      type="text"
      value={login}
      onChange={(e) => setLogin(e.target.value)}
    />
    <a href="#" onClick={() => setLoginChanging(true)}>
      Изменить
    </a>
  </div>
);
