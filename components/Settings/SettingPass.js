import styles from "../../styles/account.module.sass";

export const DefaultPass = ({ pass, setPass, setPassChanging }) => (
  <div class={`${styles.settingsMainDataInputLink}`}>
    <p>Пароль</p>
    <input type="tel" value={pass} onChange={(e) => setPass(e.target.value)} />
    <a href="#" onClick={() => setPassChanging(true)}>
      Изменить
    </a>
  </div>
);

export const ChangingPass = ({ pass, setPass, setPassChanging }) => (
  <div class={`${styles.flex}`} style={{ flexWrap: "wrap" }}>
    <div class={`${styles.settingsMainDataChangePasswordInputLink}`}>
      <p>Старый пароль</p>
      <input type="password" />
    </div>
    <div class={`${styles.settingsMainDataChangePasswordInputLink}`}>
      <p>Новый пароль</p>
      <input type="password" />
    </div>
    <div class={`${styles.settingsMainDataChangePasswordInputLink}`}>
      <p>Повторите пароль</p>
      <input type="password" />
    </div>
    <a href="#" style="color: #73C8EB;">
      Изменить
    </a>
    <a href="#" style="color: #A5B4C3;" onClick={() => setPassChanging(false)}>
      Отменить
    </a>
  </div>
);