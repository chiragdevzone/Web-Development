import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <div className={`${styles.nav}`}>
        <div>
          <img src="/images/icon.svg" alt="navicon" />
        </div>
        <div className={`${styles.navlinks}`}>
          <ul>
            <li>Home</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
