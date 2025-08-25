import { useQuery } from "@tanstack/react-query";
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { GET_MEDIA_LIST } from "@utils/api";
import MediaCard from "./MediaCard";
import { useIntersection } from "src/Hooks/useIntersection";
import MediaCardSkeleton from "./MediaCardSkeleton";

function MediaSlider({
    mediaTitle = "Media Title",
    mediaType = "movie",
    mediaKey = "popular_movies",
    listType = "popular"
}) {

    const [sectionRef, isVisible] = useIntersection({ threshold: 1 });

    const { data: mediaData, isLoading: mediaIsLoading } = useQuery({
        queryKey: [mediaKey],
        queryFn: () => GET_MEDIA_LIST(mediaType.toLowerCase(), listType.toLowerCase()),
        enabled: isVisible,
        refetchOnWindowFocus: false
    });

    return (
        <div className="media-slider" ref={sectionRef}>
            <div className="container">
                {/* Slider Header */}
                <div className="slider-header flex items-center justify-between mb-5">
                    {/* Media Title */}
                    <h2 className="media-title font-semibold text-2xl">{mediaTitle}</h2>
                    {/* Slider Controllers */}
                    {/* <div className="slider-controllers">
                        Slider Controllers
                    </div> */}
                </div>
                {/* Slider of Media */}
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1
                        },
                        375: {
                            slidesPerView: 1.3
                        },
                        480: {
                            slidesPerView: 1.8
                        },
                        575: {
                            slidesPerView: 2
                        },
                        768: {
                            slidesPerView: 2.5
                        },
                        1024: {
                            slidesPerView: 3
                        },
                        1200: {
                            slidesPerView: 4
                        },
                        1280: {
                            slidesPerView: 5
                        },
                    }}
                >
                    {
                        mediaIsLoading || !mediaData ? (
                            Array.from({ length: 20 }).map((_, index) => (<SwiperSlide key={index}>
                                <MediaCardSkeleton />
                            </SwiperSlide>))
                        ) : (
                            mediaData.results.map((media, index) => <SwiperSlide key={index}>
                                <MediaCard media={media} />
                            </SwiperSlide>)
                        )
                    }
                </Swiper>
            </div>
        </div>
    )
}

export default MediaSlider;