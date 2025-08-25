import { Link } from "react-router-dom";

function LanguagesInfo({ languages = [], mediaDataIsLoading = false }) {
    return (
        <div className="languages-info mb-4">
            <p className="mb-2">
                <i className="fa-solid fa-language fa-fw"></i>
                <span className="ms-2">Available Languages</span>
            </p>
            {/* Languages Items */}

            <ul className="flex items-center gap-2 flex-wrap">
                {
                    mediaDataIsLoading ? (
                        Array.from({ length: 4 }).map((_, index) => (<li
                            key={index}
                            className="w-20 h-10 rounded-sm bg-black-color-15 animate-pulse"
                        ></li>))
                    ) : (
                        (languages || []).length > 0 &&
                        languages.map((lang, index) => (<li key={index}>
                            <Link
                                to={'/search'}
                                title={`Search With ${(lang.name).toUpperCase()} Language`}
                                className="block py-2 px-4 rounded-md border border-black-color-15 bg-black-color-8 transition sm:hover:bg-red-color-45 sm:hover:border-red-color-45"
                            >{lang.name}</Link>
                        </li>))
                    )
                }
            </ul>
        </div>
    )
}

export default LanguagesInfo;