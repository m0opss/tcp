import styles from "../../styles/finance.module.sass";
import A from "../A";

const FinanceSidebar = ({}) => {
  return (
    <>
      <div className={`${styles.verificationSidebar}`}>
        <A href="#" className={`${styles.verificationSidebarLogo}`}>
          <img src="img/logo.svg" alt="" />
        </A>
        <ul className={`${styles.verificationSidebarMenu}`}>
          <li>
            <A href="/account">
              <img src="img/accountSidebar1.svg" alt="" /> Аккаунт
            </A>
          </li>
          <li className="active">
            <A href="settings">
              <img src="img/accountSidebar2.svg" alt="" /> Настройки
            </A>
          </li>
          <li>
            <A href="#">
              <img src="img/accountSidebar3.svg" alt="" /> Финансы
            </A>
          </li>
          <li>
            <A href="#">
              <img src="img/accountSidebar4.svg" alt="" /> Мой магазин
            </A>
          </li>
          <li>
            <A href="help">
              <img src="img/accountSidebar5.svg" alt="" /> Помощь
            </A>
          </li>
        </ul>
      </div>
    </>
  );
};

export default FinanceSidebar;
