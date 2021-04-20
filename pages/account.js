
import AccountMainInfo from "../components/Account/AccountMainInfo";
import AccountMainContacts from "../components/Account/AccountMainContacts";
import AccountMainAddress from "../components/Account/AccountMainAddress";
import AccountContainer from "../components/Account/AccountContainer";

const Account = ({}) => {
  return (
    <>
      <AccountContainer bottomBlock="AccountAvatar" headerTitle='Аккаунт'>
        <AccountMainInfo />
        <AccountMainContacts />
        <AccountMainAddress />
      </AccountContainer>
    </>
  );
};

export default Account;
