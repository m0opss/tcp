import MainContainer from "../components/MainContainer";
import HelpContainer from "../components/Help/HelpContainer";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/help.module.sass";

const Info = ({}) => {
  const isAuth = false;
  return (
    <>
      <MainContainer keywords={"support page"}>
        <MainHeader />
        <MainNav />
        <div id={styles.reference}>
          <HelpContainer>
            <div className={styles.referenceBlock}>
              <h2>Условия использования сайта</h2>
              <p>
                Внимание! Перед просмотром этого сайта внимательно прочитайте
                данные условия. Если вы не согласны с этими условиями, не
                используйте этот сайт.
              </p>
              <div className={`${styles.referenceBlockList} flex`}>
                <ul>
                  <li className={styles.active}>
                    <h3>Использование сайта</h3>
                  </li>
                  <li>
                    <h3>Обратная связь и комментарии</h3>
                  </li>
                  <li>
                    <h3>Использование сайта</h3>
                  </li>
                </ul>
                <ul>
                  <li>
                    <h3>Oтказ от ответственности</h3>
                  </li>
                  <li>
                    <h3>Название пункта</h3>
                  </li>
                  <li>
                    <h3>Oтказ от ответственности</h3>
                  </li>
                </ul>
              </div>
              <div className={styles.referenceBlockTxt}>
                <h3>Использование сайта</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.{" "}
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                  In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
                  justo. Nullam dictum felis eu pede mollis pretium. Integer
                  tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
                  vulputate eleifend tellus. Aenean leo ligula, porttitor eu,
                  consequat vitae, eleifend ac, enim.{" "}
                </p>
              </div>
            </div>
          </HelpContainer>
        </div>

        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Info;
