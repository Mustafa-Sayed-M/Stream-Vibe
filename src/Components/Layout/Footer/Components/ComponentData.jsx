function ComponentData({ component = {} }) {

    const { title = "", links = [] } = component;

    const handleClick = (e) => {
        e.preventDefault();
    };

    return (
        <div className="component-data">
            <h3 className="font-semibold mb-2 text-lg">{title}</h3>
            <ul>
                {
                    links.map((link, index) => (<li key={index}>
                        <a
                            href={link.href}
                            onClick={handleClick}
                            className="block py-1 text-grey-color-60 transition sm:hover:text-white"
                        >{link.label}</a>
                    </li>))
                }
            </ul>
        </div>
    )
}

export default ComponentData;