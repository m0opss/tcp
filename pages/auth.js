import MainContainer from "../components/MainContainer";
import A from "../components/A";

import styles from "../styles/auth.module.sass";

const Login = ({}) => {
  return (
    <>
      <MainContainer keywords={"auth page"}>
        <div id={styles.authorization}>
          <div className="flex">
            <div
              className={`${styles.authorizationItem} ${styles.authorizationItem1}`}
            >
              <A href="/">
                <img src="img/logo.svg" alt="" />
              </A>
            </div>
            <div
              className={`${styles.authorizationItem} ${styles.authorizationItem2}`}
            >
              <div className={`${styles.authorizationItemForm}`}>
                <h3>Авторизация</h3>
                <div className={`${styles.authorizationItemFormUser} flex`}>
                  <p>Новый пользователь?</p>
                  <A href="/registration">Создайте учетную запись</A>
                </div>
                <form action="#">
                  <p>Email</p>
                  <input type="mail" />
                  <p>Пароль</p>
                  <input type="mail" />
                  <div className={`${styles.flex} flex`}>
                    <A href="/restoringAccess">Забыли пароль?</A>
                    <button>Продолжить</button>
                  </div>
                </form>
                <div className={`${styles.authorizationItemLogInWith}`}>
                  <p>Или Войти с помощью</p>
                  <div className={`${styles.flex} flex`}>
                    <a
                      href="#"
                      className={`${styles.authorizationItemLogInWithAll} ${styles.authorizationItemLogInWithTwitter} ${styles.flex} flex`}
                    >
                      <img src="img/twitterAuthorization.svg" alt="" />
                      Twitter
                    </a>
                    <a
                      href="#"
                      className={`${styles.authorizationItemLogInWithAll} ${styles.authorizationItemLogInWithGoogle} ${styles.flex} flex`}
                    >
                      <img src="img/googleAuthorization.svg" alt="" />
                      Google
                    </a>
                    <a
                      href="#"
                      className={`${styles.authorizationItemLogInWithAll} ${styles.authorizationItemLogInWithApple} ${styles.flex} flex`}
                    >
                      <img src="img/appleAuthorization.svg" alt="" />
                      Apple
                    </a>
                    <a
                      href="#"
                      className={`${styles.authorizationItemLogInWithAll} ${styles.authorizationItemLogInWithFacebook} ${styles.flex} flex`}
                    >
                      <img src="img/facebookAuthorization.svg" alt="" />
                      Facebook
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default Login;
