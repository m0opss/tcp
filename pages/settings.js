import SettingsMainInfo from "../components/Settings/SettingsMainInfo";
import SettingsMainData from "../components/Settings/SettingsMainData";
import AccountContainer from "../components/Account/AccountContainer";
import SettingsMobile from "../components/Account/SettingsMobile";

const Settings = ({ pathname }) => {
  return (
    <>
      <AccountContainer pathname={pathname} bottomBlock="DoubleFactor">
        <SettingsMobile />
        <SettingsMainInfo />
        <SettingsMainData />
      </AccountContainer>
    </>
  );
};

export default Settings;

Settings.getInitialProps = ({ pathname }) => {
  return { pathname };
};
