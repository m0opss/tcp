import A from "../A";
import Head from "next/head";
import MainContainer from "../MainContainer";
import AccountSidebar from "./AccountSidebar";
import AccountHeader from "./AccountHeader";
import styles from "../../styles/account.module.sass";

const DoubleFactor = () => (
  <div className={`${styles.settingsAuthentication}`}>
    <div className={`${styles.settingsAuthenticationButton}`}>
      <div className={`${styles.settingsAuthenticationButtonToggle}`}></div>
    </div>
    <h3>Двухфакторный вход</h3>
    <p>Сделайте свою учетную запись безопасней</p>
  </div>
);

const AccountAvatar = () => (
  <div className={`${styles.accountAvatar}`}>
    <h3>Аватар</h3>
    <a href="#" className={`${styles.accountAvatarMore}`}>
      <img src="img/dotsThreeVertical.svg" alt="" />
    </a>
    <img src="img/avatar.png" className={`${styles.accountAvatarImg}`} alt="" />
  </div>
);

const AccountContainer = ({ children, headerTitle, bottomBlock }) => {

  return (
    <>
      <MainContainer>
        <div id={`${styles.settings}`}>
          <div className={`${styles.flex} flex`}>
            <AccountSidebar className={`${styles.accountSidebar}`} />
            <div className={`${styles.container} container`}>
              <div className={`${styles.settingsMain}`}>
                <AccountHeader
                  className={`${styles.accountMainHeader}`}
                  title={headerTitle}
                />
                {children}
              </div>
              {bottomBlock == "DoubleFactor" ? (
                <DoubleFactor />
              ) : bottomBlock == "AccountAvatar" ? (
                <AccountAvatar />
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default AccountContainer;
