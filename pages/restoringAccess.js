import A from "../components/A";

import styles from "../styles/restoringAccess.module.sass";

const RestoringAccess = ({}) => {
  return (
    <>
      <div id={`${styles.restoringAccess}`}>
        <div className="flex">
          <div
            className={`${styles.restoringAccessItem} ${styles.restoringAccessItem1}`}
          >
            <a href="/">
              <img src="img/logo.svg" alt="" />
            </a>
          </div>
          <div
            className={`${styles.restoringAccessItem} ${styles.restoringAccessItem2}`}
          >
            <div className={`${styles.restoringAccessItemForm}`}>
              <h3>Восстановление доступа</h3>
              <p>
                Введите код, который мы отправили на номер телефона,
                заканчивающийся на <span>83</span>
              </p>
              <form action="#">
                <div className={`${styles.flex} flex`}>
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                  <input type="text" />
                </div>
                <div className={`${styles.flex} flex`}>
                  <p>Не получили код?</p>
                  <a href="#">Отправить повторно</a>
                </div>
              </form>
              <a href="#" className={`${styles.restoringAccessItemFormLink}`}>
                Используйте другой метод для получения кода
              </a>
              <A
                href="/auth"
                className={`${styles.restoringAccessItemFormLink}`}
              >
                Войти в другой аккаунт
              </A>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RestoringAccess;
