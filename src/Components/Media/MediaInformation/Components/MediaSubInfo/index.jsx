import YearInfo from "./Components/YearInfo";
import LanguagesInfo from "./Components/LanguagesInfo";
import GenresInfo from "./Components/GenresInfo";
import RatingsInfo from "./Components/RatingsInfo";

function MediaSubInfo({ className = "", mediaData = {}, mediaDataIsLoading = false }) {

    const {
        release_date = "",
        first_air_date = "",
        spoken_languages = [],
        vote_average = 1,
        vote_count = 1,
        genres = []
    } = mediaData;

    return (
        <div className={`media-sub-info p-5 rounded-md border border-black-color-15 bg-black-color-10 ${className}`}>
            {/* Year */}
            <YearInfo
                mediaDataIsLoading={mediaDataIsLoading}
                releaseDate={release_date}
                firstAirDate={first_air_date}
            />
            {/* Languages */}
            <LanguagesInfo
                languages={spoken_languages}
                mediaDataIsLoading={mediaDataIsLoading}
            />
            {/* Genres */}
            <GenresInfo
                genres={genres}
                mediaDataIsLoading={mediaDataIsLoading}
            />
            {/* Ratings */}
            <RatingsInfo
                voteAverage={vote_average}
                voteCount={vote_count}
                mediaDataIsLoading={mediaDataIsLoading}
            />
        </div>
    )
}

export default MediaSubInfo;