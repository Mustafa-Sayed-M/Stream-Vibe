import MediaActions from "./MediaActions";

function MediaHero({
    data: {
        id = 1,
        overview = "",
        original_title = "",
        title = "",
        original_name = "",
        name = "",
        backdrop_path = ""
    },
    isDetail = false,
    isContainer = false,
    className = ""
}) {
    return (
        <section className={`media-hero-section ${className}`}>
            <div className={`${isContainer ? "container" : ""}`}>
                <div className="content-wrapper max-md:aspect-square md:aspect-video bg-black-color-6 rounded-md overflow-hidden relative">
                    <img
                        src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
                        alt="Media Background"
                        className="w-full h-full object-cover"
                    />
                    <div
                        className="content-container absolute left-0 top-0 z-10 h-full w-full flex items-end"
                        style={{
                            background: "radial-gradient(circle, transparent 30%, rgba(0,0,0,0.6) 70%)"
                        }}
                    >
                        <div className="container text-center pb-20">
                            <h2 className="mb-2 font-semibold text-xl sm:text-2xl md:text-3xl 2xl:text-4xl">{original_title || original_name || title || name || "No Media Title"}</h2>
                            <p className="md:max-w-3/4 mx-auto mb-5 max-sm:line-clamp-1 max-md:line-clamp-2 max-lg:line-clamp-3 max-xl:line-clamp-4">{overview}</p>
                            <MediaActions id={id} media_type={title ? "movie" : "show"} isDetail={isDetail} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default MediaHero;