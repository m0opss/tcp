import A from "../A";
import Head from "next/head";
import MainContainer from "../MainContainer";
import FinanceSidebar from "./FinanceSidebar";
import FinanceHeader from "./FinanceHeader";
import styles from "../../styles/finance.module.sass";

const FinanceContainer = ({ children, headerTitle }) => {
  return (
    <>
      <MainContainer>
        
        <div id={`${styles.verification}`}>
          <div className={`${styles.flex} flex`}>
            <FinanceSidebar className={`${styles.verificationSidebar}`} />
            <div className={`${styles.container} container`}>
              <FinanceHeader
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
