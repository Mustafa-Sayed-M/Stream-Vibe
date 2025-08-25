import { useQuery } from "@tanstack/react-query";
import { GET_TRENDING_MEDIA } from "@utils/api";
import MediaSlider from "./Components/MediaSlider";
import MediaSliderSkeleton from "./Components/MediaSliderSkeleton";

function MediaLanding({ mediaKey = "TRENDING_MOVIES", mediaType = "movie", trendingTime = "day" }) {
    const { data: mediaData, isLoading } = useQuery({
        queryKey: [mediaKey],
        queryFn: () => GET_TRENDING_MEDIA(mediaType.toLowerCase(), trendingTime.toLowerCase()),
        refetchOnWindowFocus: false
    });

    return (
        <div className="media-landing">
            <div className="container">
                {
                    isLoading ?
                        <MediaSliderSkeleton />
                        :
                        <MediaSlider slidesData={mediaData.results} mediaType={mediaType} />
                }
            </div>
        </div>
    );
}

export default MediaLanding;