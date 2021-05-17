import styles from "../../styles/Main/main.module.sass";
import A from "../A";

const MainAuthForm = ({}) => {
  return (
    <div className={`${styles.mainAuthForm}`}>
      <div className={`${styles.mainAuthFormContainer}`}>
        <div className="">
          <img src="img/AuthFormProfileIcon.svg" alt="" />
          <p onClick={() => onClickHas()}>Добро пожаловать в TCP Market</p>
        </div>
        <div className="">
          <A href="/register" className={`${styles.mainAuthFormButton}`}>
            Регистрация
          </A>
          <A href="/login" className={`${styles.mainAuthFormButton}`}>
            Войти
          </A>
        </div>
      </div>
    </div>
  );
};

export default MainAuthForm;
