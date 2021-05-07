import A from "../A";
import styles from "../../styles/Main/nav.module.sass";

const NavMore = ({}) => (
  <div className={`${styles.navMore}`}>
    <ul className="flex">
      <li>
        <A href="/favorites">
          <img src="img/bookmark.svg" alt="" />
        </A>
      </li>
      <li>
        <A href="/comparison">
          <img src="img/compare-scales.svg" alt="" />
        </A>
      </li>
      <li>
        <A href="/cart">
          <img src="img/cart.svg" alt="" />
        </A>
      </li>
    </ul>
  </div>
);

export default NavMore;
