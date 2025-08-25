import { useAppContext } from "@contexts/AppContext";
import { useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

const linksData = [
    {
        path: "/",
        label: "Home"
    },
    {
        path: "/movies",
        label: "Movies"
    },
    {
        path: "/shows",
        label: "Shows"
    },
    {
        path: "/support",
        label: "Support"
    },
    {
        path: "/subscriptions",
        label: "Subscriptions"
    }
];

function NavLinks() {

    const { navbarMenuIsOpen, setNavbarMenuIsOpen } = useAppContext();
    const navLinksRef = useRef(null);
    const { pathname } = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if (navLinksRef.current) {
                navLinksRef.current.classList.remove('transition');
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);

    }, []);

    useEffect(() => {
        setNavbarMenuIsOpen(false);
    }, [setNavbarMenuIsOpen, pathname]);

    return (
        <div
            ref={navLinksRef}
            className={`nav-links max-lg:absolute max-lg:left-0 max-lg:top-full max-lg:w-full max-lg:z-50 transition ${navbarMenuIsOpen ? "" : "max-lg:opacity-0 max-lg:-translate-y-2 max-lg:pointer-events-none"}`}
        >
            <div className="max-lg:container">
                <ul
                    onClick={e => e.stopPropagation()}
                    className="flex items-center gap-2 p-3 rounded-xl border-4 border-black-color-12 bg-black-color-6 max-lg:flex-col"
                >
                    {
                        linksData.map((link, index) => (<li key={index} className="max-lg:w-full">
                            <NavLink
                                to={link.path}
                                className={({ isActive }) => `block py-2 px-4 rounded-md transition ${isActive ? "bg-black-color-10" : "sm:hover:bg-black-color-10"}`}
                            >{link.label}</NavLink>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    )
}

export default NavLinks;