import AppLogo from "@components/UI/AppLogo";
import { useLocation } from "react-router-dom";
import NavLinks from "./Components/NavLinks";
import NavUtilities from "./Components/NavUtilities/NavUtilities";

function Navbar() {

    const { pathname } = useLocation();
    const isHomePage = pathname === '/';

    return (
        <nav className={`py-5 relative ${isHomePage ? "" : ""}`}>
            <div className="container flex items-center justify-between">
                {/* App Logo */}
                <AppLogo />
                {/* Nav Links */}
                <NavLinks />
                {/* Nav Utilities */}
                <NavUtilities />
            </div>
        </nav>
    )
}

export default Navbar;