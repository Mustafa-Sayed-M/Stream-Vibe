import { Link } from "react-router-dom";
import { useState } from "react";

function MediaActions({ id = 1, media_type = "movie", isDetail = false }) {
    const [isLiked, setIsLiked] = useState(false);
    const [isMuted, setIsMuted] = useState(false);

    const sharedClassName = `w-10 h-10 leading-10 text-center bg-black-color-6 border border-black-color-12 rounded-md`;

    return (
        <div className="media-actions flex items-center justify-center gap-3 flex-wrap">
            <button className="py-2 px-4 rounded-md bg-red-color-45 max-sm:w-full text-nowrap max-sm:order-1">
                <i className="fa-solid fa-play fa-fw me-2"></i>
                <span>Play Now</span>
            </button>

            {
                isDetail &&
                <Link to={`/${media_type === "movie" ? "movies" : "shows"}/${id}`} className="block w-10 h-10 leading-10 text-center bg-black-color-6 border border-black-color-12 rounded-md sm:hover:bg-red-color-45 sm:hover:text-white sm:hover:border-red-color-45 transition-colors">
                    <i className="fa-solid fa-exclamation fa-fw"></i>
                </Link>
            }

            <label className={`block text-xl cursor-pointer ${sharedClassName}`}>
                <input type="checkbox" onChange={e => setIsLiked(e.target.checked)} className="hidden" />
                <i className={`fa-${isLiked ? "solid text-red-color-45" : "regular"} fa-thumbs-up fa-fw transition-colors`}></i>
            </label>

            <label className={`block text-xl cursor-pointer ${sharedClassName}`}>
                <input type="checkbox" onChange={e => setIsMuted(e.target.checked)} className="hidden" />
                <i className={`fa-solid fa-${isMuted ? "volume-xmark text-grey-color-60" : "volume-high"} fa-fw transition-colors`}></i>
            </label>
        </div>
    );
}

export default MediaActions;