import MainContainer from "../components/MainContainer";
import HelpContainer from "../components/Help/HelpContainer";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/price.module.sass";

const Charity = ({ pathname }) => {
  const isAuth = false;
  return (
    <>
      <MainContainer keywords={"price page"}>
        <MainHeader />
        <MainNav />
        <div id={styles.price}>
          <div class="container">
            <h2>Цены на услуги</h2>
            <div class={styles.priceList}>
              <ul class="flex">
                <li class={`${styles.active} flex`}>
                  <div class={styles.priceListImg}>
                    <img src="img/priceTicket.svg" alt="" />
                  </div>
                  <p>Цена на услуги</p>
                </li>
                <li class="flex">
                  <div class={styles.priceListImg}>
                    <img src="img/pricePercent.svg" alt="" />
                  </div>
                  <p>Комисия сайта</p>
                </li>
                <li class="flex">
                  <div class={styles.priceListImg}>
                    <img src="img/priceShieldCheck.svg" alt="" />
                  </div>
                  <p>Цена страхования товара</p>
                </li>
                <li class="flex">
                  <div class={styles.priceListImg}>
                    <img src="img/priceCheckbox.svg" alt="" />
                  </div>
                  <p>Условия кредитования</p>
                </li>
                <li class="flex">
                  <div class={styles.priceListImg}>
                    <img src="img/priceWallet.svg" alt="" />
                  </div>
                  <p>Цена на услуги сайта</p>
                </li>
              </ul>
            </div>
            <div class={styles.priceTxt}>
              <h3>Цена на услуги</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus u. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus u.
              </p>
              <ul class="flex">
                <li>
                  <h4>Название услуги</h4>
                  <p>US 8.20</p>
                </li>
                <li>
                  <h4>Название услуги</h4>
                  <p>US 8.20</p>
                </li>
                <li>
                  <h4>Название услуги</h4>
                  <p>US 8.20</p>
                </li>
                <li>
                  <h4>Название услуги</h4>
                  <p>US 8.20</p>
                </li>
              </ul>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus u. Lorem ipsum dolor sit amet, consectetuer adipiscing
                elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu,
                pretium quis, sem. Nulla consequat massa quis enim. Donec pede
                justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim
                justo, rhoncus u.
              </p>
            </div>
          </div>
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
