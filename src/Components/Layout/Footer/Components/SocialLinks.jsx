const linksData = [
    {
        href: "https://www.facebook.com/",
        label: "Facebook",
        iconClassName: "facebook"
    },
    {
        href: "https://x.com/",
        label: "Twitter",
        iconClassName: "twitter"
    },
    {
        href: "https://www.linkedin.com/",
        label: "Linkedin",
        iconClassName: "linkedin"
    }
];

function SocialLinks() {
    return (
        <div className="social-links">
            <h3 className="font-semibold mb-2 text-lg">Connect With Us</h3>
            <ul className="flex items-center gap-2">
                {
                    linksData.map((link, index) => (<li key={index}>
                        <a
                            href={link.href}
                            className="flex items-center justify-center w-10 h-10 rounded-md bg-black-color-10 border border-black-color-15 transition sm:hover:bg-black-color-15"
                        >
                            <i className={`fa-brands fa-${link.iconClassName} fa-fw`}></i>
                            <span className="sr-only">{link.label}</span>
                        </a>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default SocialLinks;