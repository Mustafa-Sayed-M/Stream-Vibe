import { Link, useLocation } from "react-router-dom";

const otherLinksData = [
    {
        path: "/",
        label: "Terms of Use"
    },
    {
        path: "/",
        label: "Privacy Policy"
    },
    {
        path: "/",
        label: "Cookie Policy"
    }
];

function Copyrights() {

    const { pathname } = useLocation();

    return (
        <div className="copyrights border-t border-t-black-color-15 py-3 flex items-center justify-between max-md:flex-col gap-y-5">
            {/* Copyright Text */}
            <p>@2025 streamvib, All Rights Reserved</p>
            {/* Other Links */}
            <ul className="flex sm:items-center justify-center gap-4 flex-wrap">
                {
                    otherLinksData.map((link, index) => (<li
                        key={index}
                        className="sm:not-last-of-type:relative sm:not-last-of-type:after:absolute sm:not-last-of-type:after:w-0.5 sm:not-last-of-type:after:h-full sm:not-last-of-type:after:bg-black-color-15 sm:not-last-of-type:after:ms-2"
                    >
                        <Link
                            to={pathname}
                            className="text-grey-color-60 sm:hover:text-white transition"
                        >{link.label}</Link>
                    </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Copyrights;