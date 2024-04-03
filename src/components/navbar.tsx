import styles from "./navbar.module.css";
import Logo from "../assets/Logo.png";
import { Link, useLocation } from "react-router-dom";


const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className={styles.nav_bar}>
        <div className={styles.logo}>
          <Link to="/">
            <img className={styles.logo} src={Logo} alt="" />
          </Link>
        </div>

        <ul className={styles.nav_links}>
          <li className={styles.nav_item} >
            <Link
              to="/" className={styles.links}
            >
              Home
              <div
                style={
                  location.pathname === "/"
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className={styles.reqtangle}
              >
                <div className={styles.bigger}></div>
                <div className={styles.smaller}></div>
              </div>
            </Link>
          </li>
          <li className={styles.nav_item} >
            <Link
              to="/about" className={location.pathname === "/about" ? `${styles.links} ${styles.active}` : styles.links}
            >
              About Us
              <div
                style={
                  location.pathname === "/about"
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className={styles.reqtangle}
              >
                <div className={styles.bigger}></div>
                <div className={styles.smaller}></div>
              </div>
            </Link>
          </li>
          <li className={styles.nav_item} >
            <Link
              to="/portfolio" className={location.pathname === "/portfolio" ? `${styles.links} ${styles.active}` : styles.links}
            >
              Portfolio
              <div
                style={
                  location.pathname === "/portfolio"
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className={styles.reqtangle}
              >
                <div className={styles.bigger}></div>
                <div className={styles.smaller}></div>
              </div>
            </Link>
          </li>
          <li className={styles.nav_item} >
            <Link
              to="/news" className={location.pathname === "/news" ? `${styles.links} ${styles.active}` : styles.links}
            >
              News
              <div
                style={
                  location.pathname === "/news"
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                className={styles.reqtangle}
              >
                <div className={styles.bigger}></div>
                <div className={styles.smaller}></div>
              </div>
            </Link>
          </li>
          <li
            className={styles.nav_item}
          >
            <Link
              to="/contact"
              className={styles.contact_us}
            >
              Contact Us
              
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export { Navbar };

