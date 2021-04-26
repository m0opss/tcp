import MainContainer from "../components/MainContainer";
import A from "../components/A";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/support.module.sass";

const AuthBlock = () => {
  return (
    <div id={styles.technicalSupport}>
      <div className="container">
        <div className={styles.technicalSupportForm}>
          <form action="">
            <select name="" id="">
              <option value="">Тип вопроса</option>
            </select>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Вопрос"
            ></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const UnauthBlock = () => {
  return (
    <div id={styles.technicalSupportNoA}>
      <div className="container">
        <h2>Техническая поддержка</h2>
        <div className={styles.technicalSupportNoAForm}>
          <form action="">
            <input type="text" placeholder="Имя" />
            <input type="text" placeholder="Еmail" />
            <select name="" id="">
              <option value="">Тип вопроса</option>
            </select>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Вопрос"
            ></textarea>
            <button>Отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Support = ({}) => {
  const isAuth = false;
  return (
    <>
      <MainContainer keywords={"support page"}>
        <MainHeader />
        <MainNav />
        {isAuth ? <AuthBlock /> : <UnauthBlock />}
        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Support;
