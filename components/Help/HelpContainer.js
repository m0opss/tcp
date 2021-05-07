import A from "../A";

import styles from "../../styles/help.module.sass";

const HelpContainer = ({ children, headerTitle, pathname }) => {
  return (
    <div className="container">
      <div className="flex">
        <div className={styles.txtMenu}>
          <ul>
            <li className={pathname == "/help" ? styles.active : ``}>
              <A href="/help">Помощь</A>
            </li>
            <li className={pathname == "/info" ? styles.active : ``}>
              <A href="/info">Справка</A>
            </li>
            <li className={pathname == "/qa" ? styles.active : ``}>
              <A href="/qa">Вопрос - ответ</A>
            </li>
            <li className={pathname == "/charity" ? styles.active : ``}>
              <A href="/charity">Благотворительность</A>
            </li>
          </ul>
        </div>
        {children}
      </div>
    </div>
  );
};

export default HelpContainer;
