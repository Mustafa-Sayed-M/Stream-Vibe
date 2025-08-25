import { useAppContext } from "@contexts/AppContext";
import { useEffect } from "react";

function NavbarMenuToggler() {

    const { navbarMenuIsOpen, setNavbarMenuIsOpen } = useAppContext();

    useEffect(() => {

        const handleClickOutSide = () => {
            setNavbarMenuIsOpen(false);
        };

        document.addEventListener('click', handleClickOutSide);
        return () => document.removeEventListener('click', handleClickOutSide);

    }, [setNavbarMenuIsOpen]);

    return (
        <button
            type="button"
            title="Open Menu"
            aria-label="Navbar Menu Toggler"
            className="text-2xl lg:hidden p-2 rounded-md bg-black-color-10 border-2 border-black-color-15"
            onClick={e => {
                e.stopPropagation();
                setNavbarMenuIsOpen(prev => !prev)
            }}
        >
            <i className={`fa-solid fa-${navbarMenuIsOpen ? "xmark" : "bars"} fa-fw`}></i>
        </button>
    )
}

export default NavbarMenuToggler;