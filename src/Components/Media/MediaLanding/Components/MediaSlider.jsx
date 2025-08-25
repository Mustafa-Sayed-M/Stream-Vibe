import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import MediaHero from '@components/Media/MediaHero';

function MediaSlider({ slidesData, mediaType }) {
    const prevBtnClass = `${mediaType}-prev-btn`;
    const nextBtnClass = `${mediaType}-next-btn`;
    const sharedClassName = `w-10 h-10 leading-10 text-center bg-black-color-6 border border-black-color-12 rounded-md shadow-md sm:hover:bg-black-color-8 transition-colors`;

    return (
        <div className="slider-wrapper relative aspect-video">
            <Swiper
                modules={[Navigation]}
                spaceBetween={10}
                navigation={{
                    prevEl: `.${prevBtnClass}`,
                    nextEl: `.${nextBtnClass}`,
                }}
            >
                {slidesData.map((slideData, index) => (
                    <SwiperSlide key={index}>
                        <MediaHero data={slideData || {}} isDetail />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Slider Controllers */}
            <div className="slider-controllers absolute left-0 bottom-5 z-10 w-full">
                <div className="container flex items-center justify-between">
                    <button className={`prev-btn ${prevBtnClass} ${sharedClassName}`}>
                        <i className="fa-solid fa-angle-left fa-fw"></i>
                    </button>
                    {/* <div>Pagination</div> */}
                    <button className={`next-btn ${nextBtnClass} ${sharedClassName}`}>
                        <i className="fa-solid fa-angle-right fa-fw"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default MediaSlider;