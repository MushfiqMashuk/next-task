import PageTitle from "../PageTitle";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <PageTitle>YelloPages</PageTitle>
    </div>
  );
};

export default Navbar;
