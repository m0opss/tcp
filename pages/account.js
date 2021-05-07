import AccountMainInfo from "../components/Account/AccountMainInfo";
import AccountMainContacts from "../components/Account/AccountMainContacts";
import AccountMainAddress from "../components/Account/AccountMainAddress";
import AccountContainer from "../components/Account/AccountContainer";
import AccountMobile from "../components/Account/AccountMobile";

const Account = ({ pathname }) => {
  return (
    <>
      <AccountContainer
        pathname={pathname}
        bottomBlock="AccountAvatar"
        headerTitle="Аккаунт"
      >
        <AccountMobile />
        <AccountMainInfo />
        <AccountMainContacts />
        <AccountMainAddress />
      </AccountContainer>
    </>
  );
};

export default Account;

Account.getInitialProps = ({ pathname }) => {
  return { pathname };
};
