function MediaSliderSkeleton() {
    return (
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
                {/* Slider Controllers Skeleton */}
                <div className="flex items-center justify-between">
                    {/* Prev */}
                    <div className="w-8 h-8 rounded-sm bg-black-color-15 animate-pulse"></div>
                    {/* Pagination */}
                    <div className="w-24 h-6 rounded-sm bg-black-color-15 animate-pulse"></div>
                    {/* next */}
                    <div className="w-8 h-8 rounded-sm bg-black-color-15 animate-pulse"></div>
                </div>
            </div>
        </div>
    )
}

export default MediaSliderSkeleton;