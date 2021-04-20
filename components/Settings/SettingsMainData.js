import styles from "../../styles/account.module.sass";
import A from "../A";
import { useState } from "react";

import { ChangingLogin, DefaultLogin } from "./SettingLogin";
import { ChangingPass, DefaultPass } from "./SettingPass";

const SettingsMainData = () => {
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [loginChanging, setLoginChanging] = useState(false);
  const [passChanging, setPassChanging] = useState(false);

  return (
    <div class={`${styles.settingsMainData}`}>
      <h3>Данные входа</h3>
      <div>
        {loginChanging ? (
          <ChangingLogin
            login={login}
            setLogin={setLogin}
            setLoginChanging={setLoginChanging}
          />
        ) : (
          <DefaultLogin
            login={login}
            setLogin={setLogin}
            setLoginChanging={setLoginChanging}
          />
        )}
        {passChanging ? (
          <ChangingPass
            pass={pass}
            setPass={setPass}
            setPassChanging={setPassChanging}
          />
        ) : (
          <DefaultPass
            pass={pass}
            setPass={setPass}
            setPassChanging={setPassChanging}
          />
        )}
      </div>
    </div>
  );
};

export default SettingsMainData;
