import styles from "../../styles/Main/main.module.sass";
import A from "../A";

const MainAuthForm = ({}) => {
  return (
    <div className={`${styles.mainAuthForm}`}>
      <div className={`${styles.mainAuthFormContainer}`}>
        <img src="img/AuthFormProfileIcon.svg" alt="" />
        <p onClick={() => onClickHas()}>Добро пожаловать в TCP Market</p>
        <A href='/register' className={`${styles.mainAuthFormButton}`}>Регистрация</A>
        <A href='/login' className={`${styles.mainAuthFormButton}`}>Войти</A>
      </div>
    </div>
  );
};

export default MainAuthForm;
