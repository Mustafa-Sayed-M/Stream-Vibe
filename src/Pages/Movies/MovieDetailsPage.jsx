import MediaHero from "@components/Media/MediaHero";
import MediaInformation from "@components/Media/MediaInformation";
import { useQuery } from "@tanstack/react-query";
import { GET_MEDIA_DETAIL, GET_MEDIA_REVIEWS } from "@utils/api";
import { useParams } from "react-router-dom";

function MovieDetailsPage() {

    const { movieId } = useParams();

    const { data: movieData, isLoading: movieDataIsLoading } = useQuery({
        queryKey: [`MOVIE_${movieId}`],
        queryFn: () => GET_MEDIA_DETAIL("movie", movieId),
        refetchOnWindowFocus: false
    });

    const { data: movieReviewsData, isLoading: movieReviewsIsLoading } = useQuery({
        queryKey: [`MOVIE_REVIEWS_${movieId}`],
        queryFn: () => GET_MEDIA_REVIEWS("movie", movieId),
        refetchOnWindowFocus: false
    });

    console.log(movieReviewsData);

    return (
        <div className="movie-details-page">
            {/* Media Hero */}
            {
                movieDataIsLoading ? (
                    <div className="container mb-10">
                        <div className="media-slider-skeleton aspect-video bg-black-color-10 rounded-md flex items-end py-5">
                            <div className="container">
                                {/* Title */}
                                <div className="h-4 rounded-sm bg-black-color-15 animate-pulse mx-auto w-64 mb-5"></div>
                                {/* Overview */}
                                <div className="space-y-2 mb-5">
                                    <div className="w-3/4 h-4 rounded-sm bg-black-color-15 animate-pulse mx-auto"></div>
                                    <div className="w-2/4 h-4 rounded-sm bg-black-color-15 animate-pulse mx-auto"></div>
                                    <div className="w-1/4 h-4 rounded-sm bg-black-color-15 animate-pulse mx-auto"></div>
                                </div>
                                {/* Actions */}
                                <div className="flex items-center justify-center gap-2 mb-5">
                                    <div className="w-8 h-8 rounded-sm bg-black-color-15 animate-pulse"></div>
                                    <div className="w-8 h-8 rounded-sm bg-black-color-15 animate-pulse"></div>
                                    <div className="w-8 h-8 rounded-sm bg-black-color-15 animate-pulse"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <MediaHero
                        data={movieData || {}}
                        isContainer
                        className="mb-10"
                    />
                )
            }
            {/* Media Information */}
            <MediaInformation
                mediaData={movieData}
                mediaReviewsData={movieReviewsData}
                mediaDataIsLoading={movieDataIsLoading}
                mediaReviewsIsLoading={movieReviewsIsLoading}
            />
        </div>
    )
}

export default MovieDetailsPage;