import A from "../A";
import Head from "next/head";
import MainContainer from "../MainContainer";
import AccountSidebar from "../Account/AccountSidebar";
import AccountHeader from "../Account/AccountHeader";
import styles from "../../styles/finance.module.sass";

const FinanceContainer = ({ children, headerTitle }) => {
  return (
    <>
      <MainContainer>
        <div id={`${styles.verification}`}>
          <div className={`${styles.flex} flex`}>
            <AccountSidebar className={`${styles.verificationSidebar}`} />
            <div className={`${styles.container} container`}>
              <AccountHeader
                className={`${styles.verificationMainHeader}`}
              />
              {children}
            </div>
          </div>
        </div>
      </MainContainer>
    </>
  );
};

export default FinanceContainer;
