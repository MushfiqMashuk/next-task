import PageTitle from "../PageTitle";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <PageTitle>YellowPages</PageTitle>
    </div>
  );
};

export default Navbar;
