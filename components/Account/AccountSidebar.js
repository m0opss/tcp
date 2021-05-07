import styles from "../../styles/account.module.sass";
import A from "../A";

const AccountSidebarMenuLink = ({ link, img, title, url }) => (
  <li>
    <A href={link}>
      <img src={img} alt="" /> {title}
    </A>
  </li>
);

const AccountSidebar = ({ className, pathname }) => {
  console.log(pathname);
  return (
    <>
      <div className={`${className}`}>
        <A href="/" className={`${styles.settingsSidebarLogo}`}>
          <img
            src="img/logo.svg"
            className={`${styles.accountSidebarLogoDesktop}`}
            alt=""
          />
          <img
            src="img/logoMini.svg"
            className={`${styles.accountSidebarLogoMobile}`}
            alt=""
          />
        </A>
        <ul className={`${styles.accountSidebarMenu}`}>
          <li className={pathname == "/account" ? `${styles.active}` : ""}>
            <A href="account">
              <img src="img/accountSidebar1.svg" alt="" />
              <span> Аккаунт</span>
            </A>
          </li>
          <li className={pathname == "/settings" ? `${styles.active}` : ""}>
            <A href="settings">
              <img src="img/accountSidebar2.svg" alt="" />
              <span> Настройки</span>
            </A>
          </li>
          <li className={pathname == "/finance" ? `${styles.active}` : ""}>
            <A href="finance">
              <img src="img/accountSidebar3.svg" alt="" />
              <span> Финансы</span>
            </A>
          </li>
          <li className={pathname == "" ? `${styles.active}` : ""}>
            <A href="#">
              <img src="img/accountSidebar4.svg" alt="" />
              <span> Мой магазин</span>
            </A>
          </li>
          <li className={pathname == "/help" ? `${styles.active}` : ""}>
            <A href="help">
              <img src="img/accountSidebar5.svg" alt="" />
              <span> Помощь</span>
            </A>
          </li>
        </ul>
      </div>
    </>
  );
};

export default AccountSidebar;
