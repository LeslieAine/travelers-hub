import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import logo from '../assets/img/planet.png';

const Nav = () => (
  <>
    <div className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="logo" className={styles.logoIcon} />
        <span>Space Traveler&apos;s Hub</span>
      </div>

      <div className={styles.navbar}>
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="missions">Missions</NavLink>
        |
        <NavLink to="my-profile">My Profile</NavLink>
      </div>
    </div>
    <Outlet />
  </>
);

export default Nav;
