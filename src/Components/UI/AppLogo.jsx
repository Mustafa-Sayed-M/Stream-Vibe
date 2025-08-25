import { Link } from "react-router-dom";

function AppLogo() {
    return (
        <Link
            to={'/'}
            className="app-logo flex items-center gap-2"
        >
            <img
                src="/assets/images/logo.png"
                alt="App Logo"
                className="w-[140px] md:w-[180px] xl:w-auto"
            />
        </Link>
    )
}

export default AppLogo;