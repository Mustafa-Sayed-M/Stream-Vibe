import MediaSlider from "@components/Media/Components/MediaSlider";
import MediaSlidersProvider from "@components/Media/Components/MediaSlidersProvider";
import MediaDiscover from "@components/Media/MediaDiscover";
import MediaLanding from "@components/Media/MediaLanding";

function MoviesPage() {

    const mediaType = "movie";

    return (
        <div className="movies-page">
            {/* Media Landing */}
            <MediaLanding
                mediaKey="TRENDING_MOVIES_DAY"
                mediaType={mediaType}
                trendingTime="day"
            />
            {/* Media Discover */}
            <MediaDiscover
                mediaType={mediaType}
                mediaKey="MOVIES"
            />
            {/* Media Sliders Provider */}
            <MediaSlidersProvider>
                {/* Popular */}
                <MediaSlider
                    mediaType={mediaType}
                    mediaKey="POPULAR_MOVIES"
                    listType="popular"
                    mediaTitle="Popular Movies"
                />
                {/* Top Rated */}
                <MediaSlider
                    mediaType={mediaType}
                    mediaKey="TOP_RATED_MOVIES"
                    listType="top_rated"
                    mediaTitle="Top Rated Movies"
                />
            </MediaSlidersProvider>
        </div>
    )
}

export default MoviesPage;