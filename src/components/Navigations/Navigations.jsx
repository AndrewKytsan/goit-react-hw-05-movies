import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigations.module.scss';

export default function Navigation() {
    return (
        <>
            <div className="container">
                <nav className={s.navigation}>
                    <NavLink
                        to="/"
                        className={s.link}
                        activeclassname={s.navLink}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={s.link}
                        activeclassname={s.navLink}
                    >
                        Movies
                    </NavLink>
                </nav>
                <Outlet />
            </div>
        </>
    );
}
