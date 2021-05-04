import styles from "../styles/footer.module.sass";

const FooterItem = ({ title, content }) => (
  <div className={styles.footerItem}>
    <h3>{title}</h3>
    <ul>
      {Object.keys(content).map((li) => (
        <li key={li}>
          <a href={content[li]}>{li}</a>
        </li>
      ))}
    </ul>
  </div>
);

const MainFooter = () => {
  return (
    <>
      <footer id={styles.footer}>
        <div className="container">
          <div className="flex">
            <FooterItem
              title="TCP MARKET"
              content={{
                "Личный ассистент": "#",
                "О проекте": "/about",
                Контакты: "/contacts",
                Анонсы: "#",
                Справка: "/info",
              }}
            />
            <FooterItem
              title="Аккаунт"
              content={{
                "Мой кабинет": "/account",
                Сохраненные: "/favorites",
                Сравнения: "/comparison",
                Корзина: "/cart",
                Валюты: "#",
              }}
            />
            <FooterItem
              title="Условия"
              content={{
                Конфиденциальность: "#",
                "Цены и комиссии": "/price",
                "Доставка и возврат": "#",
                Cookies: "#",
              }}
            />
            <div className={styles.footerItem} style={{ paddingLeft: "130px" }}>
              <h3>Язык сайта</h3>
              <select name="" id="">
                <option value="rus">Русский</option>
                <option value="eng">Английский</option>
              </select>
              <div className={styles.footerItemSoc}>
                <h3>Будь ближе</h3>
                <ul>
                  <li>
                    <a href="#">
                      <img src="img/whatsapp.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/telegram.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/facebook.svg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src="img/twitter.svg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className={`${styles.footerBottom} flex`}>
            <div className={`${styles.footerBottom1} flex`}>
              <a href="#">Выгодные условия клиентам</a>
              <ul>
                <li>
                  <img src="img/advcash.svg" alt="" />
                </li>
                <li>
                  <img src="img/visa.svg" alt="" />
                </li>
                <li>
                  <img src="img/mastercard.svg" alt="" />
                </li>
              </ul>
            </div>
            <div className={`${styles.footerBottom2}`}>
              <p>TCP MARKET © Copyright 2022</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
