import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className={styles.body}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
