import { NavLink } from "react-router-dom";
import NotificationsUtility from "./Components/NotificationsUtility";
import NavbarMenuToggler from "./Components/NavbarMenuToggler";

function NavUtilities() {

    return (
        <div className="nav-utilities flex items-center gap-3">
            {/* Search */}
            <NavLink
                to={'/search'}
                className={({ isActive }) => `text-2xl transition ${isActive ? "text-red-color-45" : "sm:hover:text-red-color-45"}`}
            >
                <i className="fa-solid fa-search fa-fw"></i>
                <span className="sr-only">Search</span>
            </NavLink>
            {/* Notifications */}
            <NotificationsUtility />
            {/* Navbar Menu Toggler */}
            <NavbarMenuToggler />
        </div>
    )
}

export default NavUtilities;