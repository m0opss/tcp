import MainContainer from "../components/MainContainer";
import HelpContainer from "../components/Help/HelpContainer";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/help.module.sass";

const Charity = ({ pathname }) => {
  const isAuth = false;
  return (
    <>
      <MainContainer keywords={"support page"}>
        <MainHeader />
        <MainNav />
        <div id={styles.charityWork}>
          <HelpContainer pathname={pathname}>
            <div className={styles.charityWorkBlock}>
              <h2>Благотворительность</h2>
              <div class={`${styles.charityWorkContent} ${styles.flex} flex`}>
                <div class={styles.charityWorkContentScore}></div>
                <div class={styles.charityWorkContentForm}>
                  <h3>Цель благотворительности</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus.{" "}
                  </p>
                  <div class={styles.charityWorkContentFormInputs}>
                    <input type="text" placeholder="Сумма" />
                    <select name="" id="">
                      <option value="">Кошелек</option>
                    </select>
                    <button>Отправить</button>
                  </div>
                </div>
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
