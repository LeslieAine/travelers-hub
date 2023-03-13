import { NavLink, Outlet } from 'react-router-dom';

const Nav = () => {
    <>
        <div>
            <img src= './images/planet.png' alt='planet-logo'/> 
            <h1>Space Traveler's Hub</h1>

            <ul>
                <li>
                    <NavLink to='/'>Rockets</NavLink>
                </li>
                <li>
                    <NavLink to='missions'>Missions</NavLink>
                </li>
                <li>
                    <NavLink  to='my-profile'>My Profile</NavLink>
                </li>
            </ul>
        </div>
        <Outlet />
    </>
}

export default Nav;