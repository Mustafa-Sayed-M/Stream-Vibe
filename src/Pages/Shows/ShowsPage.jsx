import MediaSlider from "@components/Media/Components/MediaSlider";
import MediaSlidersProvider from "@components/Media/Components/MediaSlidersProvider";
import MediaDiscover from "@components/Media/MediaDiscover";
import MediaLanding from "@components/Media/MediaLanding";

function ShowsPage() {

    const mediaType = "tv";

    return (
        <div className="show-page">
            {/* Media Landing */}
            <MediaLanding
                mediaKey="TRENDING_SHOWS_DAY"
                mediaType={mediaType}
                trendingTime="day"
            />
            {/* Media Discover */}
            <MediaDiscover
                mediaType={mediaType}
                mediaKey="shows"
            />
            {/* Media Sliders Provider */}
            <MediaSlidersProvider>
                {/* Popular */}
                <MediaSlider
                    mediaType={mediaType}
                    mediaKey="popular_shows"
                    listType="popular"
                    mediaTitle="Popular Shows"
                />
                {/* Top Rated */}
                <MediaSlider
                    mediaType={mediaType}
                    mediaKey="top_rated_shows"
                    listType="top_rated"
                    mediaTitle="Top Rated Shows"
                />
            </MediaSlidersProvider>
        </div>
    )
}

export default ShowsPage;