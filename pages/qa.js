import MainContainer from "../components/MainContainer";
import HelpContainer from "../components/Help/HelpContainer";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/help.module.sass";

const QAitem = ({ title, content }) => (
  <div class={styles.qaItem}>
    <div class={`${styles.qaItemTitle} flex`}>
      <div class={styles.qaItemTitleImg}>
        <img src="img/user.svg" alt="" />
      </div>
      <p>{title}</p>
    </div>
    <p>{content}</p>
  </div>
);

const QAitemAnswer = ({ title, content }) => (
  <div class={styles.qaItemAnswer}>
    <div class={`${styles.qaItemAnswerTitle} flex`}>
      <div class={styles.qaItemAnswerTitleImg}>
        <img src="img/userAdmin.svg" alt="" />
      </div>
      <p>{title}</p>
    </div>
    <p>{content}</p>
  </div>
);

const Charity = ({ pathname }) => {
  const isAuth = false;
  return (
    <>
      <MainContainer keywords={"support page"}>
        <MainHeader />
        <MainNav />
        <div id={styles.qa}>
          <HelpContainer pathname={pathname}>
            <div className={styles.qaBlock}>
              <h2>Вопрос - ответ</h2>
              <div class={styles.qaItems}>
                <QAitem
                  title="Андрей  22.03.2021  12:40"
                  content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
                <QAitemAnswer
                  title="Андрей  22.03.2021  12:40"
                  content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
                <QAitem
                  title="Андрей  22.03.2021  12:40"
                  content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
                <QAitemAnswer
                  title="Андрей  22.03.2021  12:40"
                  content="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
                />
              </div>
              <div class={styles.qaForm}>
                <h3>Задать вопрос</h3>
                <form action="">
                  <div class={`${styles.flex} flex`}>
                    <div class={styles.qaFormInput}>
                      <p>Ваше имя</p>
                      <input type="text" class={styles.qaFormInput1} />
                    </div>
                    <div class={styles.qaFormInput}>
                      <p>Вопрос</p>
                      <input type="text" class={styles.qaFormInput2} />
                    </div>
                  </div>
                  <button>Отправить</button>
                </form>
              </div>
            </div>
          </HelpContainer>
        </div>

        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Charity;

Charity.getInitialProps = ({ pathname }) => {
  return { pathname };
};
