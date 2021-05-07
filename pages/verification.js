
import FinanceContainer from "../components/Finance/FinanceContainer";

import styles from "../styles/finance.module.sass";

const VerificationItem = ({ title, status, img }) => (
  <div className={`${styles.verificationItem}`}>
    <div className={`${styles.verificationItemTitle} ${styles.flex} flex`}>
      <img src={img} alt="" />
      <h3>{title}</h3>
    </div>
    <p>Необходимо для пользования cайтом</p>
    <span>
      {status == "Не верифицирован" ? (
        <>
          <img src="img/check1.svg" alt="" />
          Не верифицирован
        </>
      ) : status == "Ошибка верификации" ? (
        <>
          <img src="img/check3.svg" alt="" />
          Ошибка верификации
        </>
      ) : (
        <>
          <img src="img/check2.svg" alt="" />
          Верифицирован успешно
        </>
      )}
    </span>

    {status == "Не верифицирован" || status == "Ошибка верификации" ? (
      <a href="#" className={`${styles.verificationItemLoad}`}>
        Загрузить
      </a>
    ) : (
      <a href="#" className={`${styles.verificationItemRemove}`}>
        Удалить
      </a>
    )}
  </div>
);

const Verification = ({}) => {
  return (
    <>
      <FinanceContainer headerTitle="Аккаунт">
        <div className={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
          <VerificationItem
            title="Подтверждение паспорта"
            status="Не верифицирован"
            img="img/passport.svg"
          />
          <VerificationItem
            title="Подтверждение карты"
            status="Ошибка верификации"
            img="img/card.svg"
          />
          <VerificationItem
            title="Подтверждение адреса"
            status="Верифицирован успешно"
            img="img/address.svg"
          />
        </div>
      </FinanceContainer>
    </>
  );
};

export default Verification;
