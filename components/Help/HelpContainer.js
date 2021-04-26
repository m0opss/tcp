import A from "../A";

import styles from "../../styles/help.module.sass";

const HelpContainer = ({ children, headerTitle }) => {
  return (
    <div className="container">
      <div className="flex">
        <div className={styles.txtMenu}>
          <ul>
            <li>
              <A href="/help">Помощь</A>
            </li>
            <li>
              <A href="/info">Справка</A>
            </li>
            <li className="active">
              <A href="/qa">Вопрос - ответ</A>
            </li>
            <li>
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
