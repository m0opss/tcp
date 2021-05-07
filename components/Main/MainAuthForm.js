import styles from "../../styles/Main/main.module.sass";

const MainAuthForm = ({}) => {
  return (
    <div className={`${styles.mainAuthForm}`}>
      <div className={`${styles.mainAuthFormContainer}`}>
        <img src="img/AuthFormProfileIcon.svg" alt="" />
        <p>Добро пожаловать в TCP Market</p>
        <div className={`${styles.mainAuthFormButton}`}>Регистрация</div>
        <div className={`${styles.mainAuthFormButton}`}>Войти</div>
      </div>
    </div>
  );
};

export default MainAuthForm;
