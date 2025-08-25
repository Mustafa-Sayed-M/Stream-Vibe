import { useState } from "react";
import { Link } from "react-router-dom";

function MediaCard({ media: {
    id = 1,
    original_title = "",
    original_name = "",
    poster_path = "",
    release_date = "",
    first_air_date = "",
    title = "",
    name = "",
    vote_average = 0
} }) {

    const pathDetail = `/${title ? "movies" : "shows"}/${id}`;
    const [isWhitList, setIsWhitList] = useState(false);

    return (
        <div className="media-card p-4 rounded-md bg-black-color-10 border border-black-color-15">
            {/* Media Poster */}
            <Link
                to={pathDetail}
                className="block mb-3 aspect-[1/1.5] sm:hover:-translate-y-2 sm:hover:shadow-2xl transition duration-300"
            >
                <img
                    src={`https://image.tmdb.org/t/p/w500${poster_path}`}
                    alt={original_title || original_name || title || name || "Media Poster"}
                    className="rounded-md h-full w-full"
                />
            </Link>
            {/* Media Info */}
            <div className="media-info mb-3">
                {/* Title or Name */}
                <Link
                    to={pathDetail}
                    className="line-clamp-1 w-fit font-semibold sm:hover:text-red-color-45 transition-colors mb-2"
                >
                    {title || name || "Media Label"}
                </Link>
                {/* Sub Info */}
                <div className="sub-info flex items-center justify-between">
                    {/* Rating */}
                    <div className="flex items-center gap-2">
                        <ul className="flex space-x-0.5">
                            {
                                Array.from({ length: 5 }).map((_, index) => {
                                    const starValue = (vote_average / 10) * 5;
                                    const diff = starValue - index;
                                    let starClass = "fa-regular fa-star";
                                    if (diff >= 1) {
                                        starClass = "fa-solid fa-star";
                                    } else if (diff >= 0.5) {
                                        starClass = "fa-solid fa-star-half-stroke";
                                    }
                                    return <i className={`${starClass} fa-fw text-red-color-45`} key={index}></i>;
                                })
                            }
                        </ul>
                        <p>{vote_average.toFixed(1)}</p>
                    </div>
                    {/* Year */}
                    <p>{(release_date || first_air_date || "").slice(0, 4)}</p>
                </div>
            </div>
            {/* Media Actions */}
            <div className="media-actions flex items-center justify-between">
                {/* Add to Whit List */}
                <label
                    className="block text-xl cursor-pointer"
                >
                    <input
                        type="checkbox"
                        name="whitelist"
                        onChange={e => setIsWhitList(e.target.checked)}
                        className="hidden peer"
                    />
                    <i className={`fa-${isWhitList ? "solid text-red-color-45" : "regular text-grey-color-60"} fa-heart fa-fw transition-colors`}></i>
                </label>
                {/* More Detail */}
                <Link
                    to={pathDetail}
                    className="block py-2 px-4 rounded-md bg-red-color-45"
                >
                    More Details
                </Link>
            </div>
        </div>
    )
}

export default MediaCard;