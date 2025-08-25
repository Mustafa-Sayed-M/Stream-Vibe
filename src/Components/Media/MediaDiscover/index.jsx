import { useQuery } from "@tanstack/react-query";
import MediaCard from "../Components/MediaCard";
import { DISCOVER_MEDIA } from "@utils/api";
import MediaCardSkeleton from "../Components/MediaCardSkeleton";
import { useIntersection } from "src/Hooks/useIntersection";

function MediaDiscover({ mediaType = 'movie', mediaKey = "movies" }) {

  const [sectionRef, isVisible] = useIntersection({ threshold: 0.2 });

  const { data: mediaData, isLoading: mediaIsLoading } = useQuery({
    queryKey: [mediaKey],
    queryFn: () => DISCOVER_MEDIA(mediaType.toLowerCase()),
    enabled: isVisible,
    refetchOnWindowFocus: false
  });

  return (
    <div className="media-discover py-10" ref={sectionRef}>
      <div className="container">
        <div className="media-grid grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-5">
          {
            mediaIsLoading || !mediaData ? (
              Array.from({ length: 20 }).map((_, index) => (<MediaCardSkeleton key={index} />))
            ) : (
              mediaData.results.map((media, index) => (<MediaCard key={index} media={media} />))
            )
          }
        </div>
      </div>
    </div>
  )
}

export default MediaDiscover;