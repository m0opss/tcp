import MainContainer from "../components/MainContainer";
import A from "../components/A";

import styles from "../styles/registration.module.sass";

const Registrarion = ({}) => {
  return (
    <>
      <div id={`${styles.registration}`}>
        <div className="flex">
          <div
            className={`${styles.registrationItem} ${styles.registrationItem1}`}
          >
            <a href="/">
              <img
                src="img/logo.svg"
                className={`${styles.registrationItem1Desktop}`}
                alt=""
              />
              <img
                src="img/logo-black.svg"
                className={`${styles.registrationItem1Mobile}`}
                alt=""
              />
            </a>
          </div>
          <div
            className={`${styles.registrationItem} ${styles.registrationItem2}`}
          >
            <div className={`${styles.registrationItemForm} `}>
              <h3>Регистрация</h3>
              <div className={`${styles.registrationItemFormUser} flex`}>
                <p>Уже зарегистрированы?</p>
                <A href="/auth">Войти</A>
              </div>
              <form action="#">
                <p>Адрес электронной почты</p>
                <input type="mail" />
                <p>Пароль</p>
                <input type="password" />
                <p>Повторите пароль</p>
                <input type="password" />
                <div className={`${styles.flex} flex`}>
                  <p>Хотите надежный пароль?</p>
                  <a href="#">Сгенирировать</a>
                </div>
                <button>Продолжить</button>
              </form>
              <p className={`${styles.registrationItemFormPolicy}`}>
                Нажимая «Продолжить», я подтверждаю, что ознакомился с
                положениями, указанными в статьях{" "}
                <a href="#">Условия использования</a> и{" "}
                <a href="#">Политика конфиденциальности</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registrarion;
