import ComponentData from "./Components/ComponentData";
import Copyrights from "./Components/Copyrights";
import SocialLinks from "./Components/SocialLinks";

const componentsData = [
    {
        title: "Home",
        links: [
            {
                href: "#",
                label: "Categories"
            },
            {
                href: "#",
                label: "Devices"
            },
            {
                href: "#",
                label: "Pricing"
            },
            {
                href: "#",
                label: "FAQ"
            },
        ]
    },
    {
        title: "Movies",
        links: [
            {
                href: "#",
                label: "Genres"
            },
            {
                href: "#",
                label: "Trending"
            },
            {
                href: "#",
                label: "New Release"
            },
            {
                href: "#",
                label: "Popular"
            }
        ]
    },
    {
        title: "Shows",
        links: [
            {
                href: "#",
                label: "Genres"
            },
            {
                href: "#",
                label: "Trending"
            },
            {
                href: "#",
                label: "New Release"
            },
            {
                href: "#",
                label: "Popular"
            }
        ]
    },
    {
        title: "Support",
        links: [
            {
                href: "#",
                label: "Contact Us"
            }
        ]
    },
    {
        title: "Subscriptions",
        links: [
            {
                href: "#",
                label: "Plans"
            },
            {
                href: "#",
                label: "Features"
            }
        ]
    }
];

function Footer() {
    return (
        <footer className="py-10 bg-black-color-6">
            <div className="container">
                {/* Footer Content */}
                <div className="footer-content grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5 pb-5">
                    {/* Component Data */}
                    {
                        componentsData.map((component, index) => (<ComponentData component={component} key={index} />))
                    }
                    {/* Social Links */}
                    <SocialLinks />
                </div>
                {/* Copyrights */}
                <Copyrights />
            </div>
        </footer>
    )
}

export default Footer;