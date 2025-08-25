function EpisodeCard({ episodesLength = 0, episode = {} }) {

    const { episode_number, still_path, name, overview, runtime } = episode;

    return (
        <div className="episode-card border-t border-t-black-color-15 py-4 flex items-center gap-4 flex-wrap">
            {/* Number */}
            <div className="episode-number font-semibold text-2xl text-grey-color-60">
                {(episode_number).toString().padStart(episodesLength > 1000 ? 4 : episodesLength > 100 ? 3 : 2, "0")}
            </div>
            {/* Cover */}
            <img
                src={`https://image.tmdb.org/t/p/original${still_path}`}
                alt="Episode Cover"
                className="episode-cover rounded-md md:h-[120px] max-md:flex-1"
            />
            {/* Text Content */}
            <div className="episode-text-content md:flex-1 max-md:w-full">
                {/* Header Content */}
                <div className="episode-header-content flex gap-2 items-center justify-between gap-y-2 mb-2">
                    {/* Name */}
                    <h3 className="md:text-xl line-clamp-1 font-semibold">{name}</h3>
                    {/* Runtime */}
                    <div className="episode-runtime text-nowrap text-grey-color-60 py-2 px-4 rounded-md bg-black-color-8 border border-black-color-15">
                        <i className="fa-regular fa-clock fa-fw"></i>
                        <span className="ms-2">{runtime} min</span>
                    </div>
                </div>
                {/* Overview */}
                <p className="max-md:hidden">{overview}</p>
            </div>
        </div>
    )
}

export default EpisodeCard;