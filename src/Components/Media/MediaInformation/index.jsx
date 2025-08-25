import MediaOverview from "./Components/MediaOverview";
import MediaReviews from "./Components/MediaReviews";
import MediaSeasons from "./Components/MediaSeasons";
import MediaSubInfo from "./Components/MediaSubInfo";

function MediaInformation({
    mediaData = {},
    mediaDataIsLoading = false,
    mediaReviewsIsLoading = false,
    mediaReviewsData = {},
    mediaType = "movie"
}) {

    const {
        overview = "",
        seasons = []
    } = mediaData;

    return (
        <section className="media-information-section">
            <div className="container grid items-start grid-cols-1 lg:grid-cols-3 gap-5">
                {/* Media Seasons */}
                {
                    mediaType === "tv" ? (
                        <MediaSeasons
                            seasonsData={seasons}
                            className="lg:col-span-2"
                        />
                    ) : null
                }
                {/* Media Sub Info */}
                <MediaSubInfo
                    mediaDataIsLoading={mediaDataIsLoading}
                    mediaData={mediaData}
                    className={`${mediaType === "tv" ? "row-span-4" : "row-span-3"}`}
                />
                {/* Media Overview */}
                <MediaOverview
                    mediaDataIsLoading={mediaDataIsLoading}
                    overview={overview}
                    className={`lg:col-span-2 ${mediaType === "movie" ? "-order-1" : ""}`}
                />
                {/* Media Reviews */}
                <MediaReviews
                    mediaReviewsData={mediaReviewsData}
                    mediaReviewsIsLoading={mediaReviewsIsLoading}
                    className="lg:col-span-2"
                />
            </div>
        </section>
    )
}

export default MediaInformation;