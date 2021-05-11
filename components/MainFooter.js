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
              title="Финансы"
              content={{
                Инвестирование: "#",
                Кредитование: "/about",
                Страхование: "/contacts",
                "De-Fi": "#",
                Торговля: "/info",
                "Открыть счет": "/info",
              }}
            />
            <FooterItem
              title="TCP Company"
              content={{
                "О компании": "/account",
                Благотворительность: "/favorites",
                Справка: "/comparison",
                Поддержка: "/cart",
              }}
            />
            <FooterItem
              title="TCP Магазин"
              content={{
                Конфиденциальность: "#",
                Cookies: "#",
                "Доставка и возврат": "#",
                "Цены и комиссии": "/price",
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
            <p>© Trade Change Place</p>
            <p>Все права защищены.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default MainFooter;
