
import SettingsMainInfo from "../components/Settings/SettingsMainInfo";
import SettingsMainData from "../components/Settings/SettingsMainData";
import AccountContainer from "../components/Account/AccountContainer";

const Settings = ({}) => {
  return (
    <>
      <AccountContainer bottomBlock="DoubleFactor">
        <SettingsMainInfo />
        <SettingsMainData />
      </AccountContainer>
    </>
  );
};

export default Settings;
