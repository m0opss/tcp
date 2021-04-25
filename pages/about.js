import MainContainer from "../components/MainContainer";
import A from "../components/A";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/about.module.sass";

const About = ({}) => {
  return (
    <>
      <MainContainer keywords={"about page"}>
        <MainHeader />
        <MainNav />

        <div id={styles.about}>
          <div class="container">
            <div class={styles.about1}>
              <h2>О компании</h2>
              <div class={`${styles.flex} ${styles.about1Block} flex`}>
                <img src="img/logoAbout.svg" alt="" />
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Donec quam felis, ultricies nec,
                  pellentesque eu, pretium quis, sem. Nulla consequat massa quis
                  enim. Donec pede justo, fringilla vel, aliquet nec, vulputate
                  eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                  vitae, justo. Nullam dictum felis eu pede mollis pretium.
                  Integer tincidunt.{" "}
                </p>
              </div>
            </div>
            <div class={styles.about2}>
              <h3>Trade Change Place</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi.{" "}
              </p>
            </div>
            <div class={styles.about3}>
              <div class={`${styles.flex} flex`}>
                <div class={styles.about3Item}>
                  <h4>2.7 млн</h4>
                  <p>доступных к покупке товаров</p>
                </div>
                <div class={styles.about3Item}>
                  <h4>84 %</h4>
                  <p>пользователей возвращаются к нам</p>
                </div>
                <div class={styles.about3Item} style={{ marginRight: 0 }}>
                  <h4>1,5 млн</h4>
                  <p>посетителей на сайте в день</p>
                </div>
              </div>
            </div>
            <div class={styles.about4}>
              <h3>Наша цель — быть полезными</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Donec vitae sapien ut
                libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
                eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                bibendum sodales.
              </p>
            </div>
            <div class={styles.about5}>
              <img src="img/aboutImg.jpg" alt="" />
            </div>
            <div class={styles.about6}>
              <h3>Наша цель — быть полезными</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo,
                rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum
                felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
                Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
                enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque
                rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.
                Curabitur ullamcorper ultricies nisi. Donec vitae sapien ut
                libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci
                eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit
                amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                bibendum sodales.
              </p>
            </div>
          </div>
        </div>
        <MainFooter />
      </MainContainer>
    </>
  );
};

export default About;
