import MainContainer from "../components/MainContainer";
import HelpContainer from "../components/Help/HelpContainer";
import MainHeader from "../components/MainHeader";
import MainNav from "../components/Main/MainNav";
import MainFooter from "../components/MainFooter";
import styles from "../styles/comparison.module.sass";

const ComparisonTableItem = ({
  img,
  name,
  net,
  d,
  display,
  matrix,
  glass,
  simNum,
  simSize,
  oMem,
  mem,
  sd,
  os,
  fcamN,
  mp,
  accum,
  material,
  weight,
  color,
}) => (
  <div class={styles.comparisonTableItem}>
    <ul>
      <li class={styles.comparisonTableItemImg}>
        <img src={img} alt="" />
      </li>
      <li class={styles.comparisonTableItemName}>
        <h4>{name}</h4>
      </li>
      <li class={styles.comparisonTableItemStandart}>
        <p>
          {net.map((n) => (
            <>
              {n} <br />
            </>
          ))}
        </p>
      </li>
      <li>
        <p>{d}</p>
      </li>
      <li>
        <p>{display}</p>
      </li>
      <li>
        <p>{matrix}</p>
      </li>
      <li>
        <p>{glass}</p>
      </li>
      <li>
        <p>{simNum}</p>
      </li>
      <li>
        <p>{simSize}</p>
      </li>
      <li>
        <p>{oMem}</p>
      </li>
      <li>
        <p>{mem}</p>
      </li>
      <li>
        <p>{sd}</p>
      </li>
      <li>
        <p>{os}</p>
      </li>
      <li>
        <p>{fcamN}</p>
      </li>
      <li>
        <p>{mp}</p>
      </li>
      <li>
        <p>{accum}</p>
      </li>
      <li>
        <p>{material}</p>
      </li>
      <li>
        <p>{weight}</p>
      </li>
      <li>
        <p>{color}</p>
      </li>
      <li class={`${styles.comparisonTableItemBottom} ${styles.flex} flex`}>
        <a href="#">
          <img src="img/bookmarkItem.svg" alt="" />
        </a>
        <a href="#">
          <img src="img/compareScalesItem.svg" alt="" />
        </a>
        <a href="#" class={styles.comparisonTableItemBottomCart}>
          <img src="img/cartItem.svg" alt="" />
          <p>Купить</p>
        </a>
      </li>
    </ul>
  </div>
);

const Comparison = ({ pathname }) => {
  const isAuth = false;
  return (
    <>
      <MainContainer keywords={"comparison page"}>
        <MainHeader />
        <MainNav />
        <div id={styles.comparison}>
          <div class={`${styles.container} container`}>
            <div class={`${styles.comparisonTitle} flex`}>
              <h2>Сравнение товара</h2>
              <a href="#">Удалить все</a>
            </div>
            <h3>Мобильные телефоны</h3>
            <div class={`${styles.comparisonTable} flex`}>
              <div class={styles.comparisonTableList}>
                <ul>
                  <li class={styles.comparisonTableListImg}>Фото</li>
                  <li class={styles.comparisonTableListName}>Название</li>
                  <li class={styles.comparisonTableListStandart}>
                    Стандарт связи3G (WCDMA/UMTS/HSPA)
                  </li>
                  <li>Диагональ экрана</li>
                  <li>Разрешение дисплея</li>
                  <li>Тип матрицы</li>
                  <li>Материал экрана</li>
                  <li>Количество СИМ-карт</li>
                  <li>Размеры СИМ-карты</li>
                  <li>Оперативная память</li>
                  <li>Встроенная память</li>
                  <li>Формат поддерживаемых карт памяти</li>
                  <li>Операционная система</li>
                  <li>Количество фронтальных камер</li>
                  <li>Количество мегапикселей фронтальной камеры</li>
                  <li>Емкость аккумулятора</li>
                  <li>Материал корпуса</li>
                  <li>Вес, г</li>
                  <li>Цвет</li>
                </ul>
              </div>
              <ComparisonTableItem
                img="img/phone.jpg"
                name="Samsung Galaxy A51 6/128GB Blue (SM-A515FZBWSEK)"
                net={["2G (GPRS/EDGE)", "3G (WCDMA/UMTS/HSPA)", "4G (LTE)"]}
                d="6.5"
                display="2400 x 1080"
                matrix="Super AMOLED"
                glass="Стекло (Gorilla Glass 3)"
                simNum="2"
                simSize="Nano-SIM"
                oMem="6 ГБ"
                mem="128 ГБ"
                sd="microSD"
                os="Android"
                fcamN="1"
                mp="32 Мп"
                accum="4000 мА*ч"
                material="Пластик"
                weight="172"
                color="Blue"
              />
              <ComparisonTableItem
                img="img/phone.jpg"
                name="Samsung Galaxy A51 6/128GB Blue (SM-A515FZBWSEK)"
                net={["2G (GPRS/EDGE)", "3G (WCDMA/UMTS/HSPA)", "4G (LTE)"]}
                d="6.5"
                display="2400 x 1080"
                matrix="Super AMOLED"
                glass="Стекло (Gorilla Glass 3)"
                simNum="2"
                simSize="Nano-SIM"
                oMem="6 ГБ"
                mem="128 ГБ"
                sd="microSD"
                os="Android"
                fcamN="1"
                mp="32 Мп"
                accum="4000 мА*ч"
                material="Пластик"
                weight="172"
                color="Blue"
              />
              <ComparisonTableItem
                img="img/phone.jpg"
                name="Samsung Galaxy A51 6/128GB Blue (SM-A515FZBWSEK)"
                net={["2G (GPRS/EDGE)", "3G (WCDMA/UMTS/HSPA)", "4G (LTE)"]}
                d="6.5"
                display="2400 x 1080"
                matrix="Super AMOLED"
                glass="Стекло (Gorilla Glass 3)"
                simNum="2"
                simSize="Nano-SIM"
                oMem="6 ГБ"
                mem="128 ГБ"
                sd="microSD"
                os="Android"
                fcamN="1"
                mp="32 Мп"
                accum="4000 мА*ч"
                material="Пластик"
                weight="172"
                color="Blue"
              />
            </div>
          </div>
        </div>
        <MainFooter />
      </MainContainer>
    </>
  );
};

export default Comparison;
