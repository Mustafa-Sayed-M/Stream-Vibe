import MediaHero from "@components/Media/MediaHero";
import MediaInformation from "@components/Media/MediaInformation";
import { useQuery } from "@tanstack/react-query";
import { GET_MEDIA_DETAIL, GET_MEDIA_REVIEWS } from "@utils/api";
import { useParams } from "react-router-dom";

function ShowDetailsPage() {

    const { showId } = useParams();

    const { data: showData, isLoading: showDataIsLoading } = useQuery({
        queryKey: [`SHOW_${showId}`],
        queryFn: () => GET_MEDIA_DETAIL("tv", showId),
        refetchOnWindowFocus: false
    });

    const { data: showReviewsData, isLoading: showReviewsIsLoading } = useQuery({
        queryKey: [`SHOW_REVIEWS_${showId}`],
        queryFn: () => GET_MEDIA_REVIEWS("tv", showId),
        refetchOnWindowFocus: false
    });

    console.log(showData);

    return (
        <div className="show-details-page">
            {/* Media Hero */}
            {
                showDataIsLoading ? (
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
                        data={showData || {}}
                        isContainer
                        className="mb-10"
                    />
                )
            }
            {/* Media Information */}
            <MediaInformation
                mediaType="tv"
                mediaData={showData}
                mediaReviewsData={showReviewsData}
                mediaDataIsLoading={showDataIsLoading}
                mediaReviewsIsLoading={showReviewsIsLoading}
            />
        </div>
    )
}

export default ShowDetailsPage;