import A from "../A";
import styles from "../../styles/Main/nav.module.sass";

const NavSearch = ({}) => (
  <div className={`${styles.navSearch}`}>
    <img src="img/microphone.svg" className={`${styles.navSearchMicrophone}`} alt="" />
    <input type="search" placeholder="Поиск..." />
    <img src="img/search.svg" className={`${styles.navSearchEnter}`} alt="" />
  </div>
);

export default NavSearch;
