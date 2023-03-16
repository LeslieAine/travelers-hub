import { NavLink, Outlet } from 'react-router-dom';
import styles from '../styles/Nav.module.css';
import logo from '../images/planet.png';

const Nav = () => (
  <>
    <div className={styles.nav}>
      <img src={logo} alt="planet-logo" />
      <h1>Space Traveler&apos;s Hub</h1>

      <ul>
        <li>
          <NavLink to="/">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="missions">Missions</NavLink>
        </li>
        <li>
          <NavLink to="my-profile">My Profile</NavLink>
        </li>
      </ul>
    </div>
    <Outlet />
  </>
);

export default Nav;
