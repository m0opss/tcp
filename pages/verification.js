import AccountMainInfo from "../components/Account/AccountMainInfo";
import AccountMainContacts from "../components/Account/AccountMainContacts";
import AccountMainAddress from "../components/Account/AccountMainAddress";
import FinanceContainer from "../components/Finance/FinanceContainer";

import styles from "../styles/finance.module.sass";

const VerificationItem = ({ title, status }) => (
  <div class={`${styles.verificationItem}`}>
    <div class={`${styles.verificationItemTitle} ${styles.flex} flex`}>
      <img src="img/passport.svg" alt="" />
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
      <a href="#" class={`${styles.verificationItemLoad}`}>
        Загрузить
      </a>
    ) : (
      <a href="#" class={`${styles.verificationItemRemove}`}>
        Удалить
      </a>
    )}
  </div>
);

const Verification = ({}) => {
  return (
    <>
      <FinanceContainer headerTitle="Аккаунт">
        <div class={`${styles.flex} flex`} style={{ flexWrap: "wrap" }}>
          <VerificationItem
            title="Подтверждение паспорта"
            status="Не верифицирован"
          />
          <VerificationItem
            title="Подтверждение карты"
            status="Ошибка верификации"
          />
          <VerificationItem
            title="Подтверждение адреса"
            status="Верифицирован успешно"
          />
        </div>
      </FinanceContainer>
    </>
  );
};

export default Verification;
