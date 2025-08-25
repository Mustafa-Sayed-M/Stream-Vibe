function EpisodeCardSkeleton() {
    return (
        <div className="episode-card-skeleton border-t border-t-black-color-15 py-4 flex items-center gap-4 flex-wrap">
            {/* Episode Number */}
            <div className="w-6 h-6 bg-black-color-15 animate-pulse rounded-sm"></div>
            {/* Episode Cover */}
            <div className="md:aspect-video max-md:flex-1 h-[120px] rounded-md bg-black-color-15 animate-pulse max-md:-order-1"></div>
            {/* Episode Text Content */}
            <div className="space-y-3 md:flex-1 max-md:w-full">
                {/* Header Content */}
                <div className="flex items-center justify-between flex-wrap gap-y-2">
                    <div className="w-3/4 h-4 rounded-sm bg-black-color-15 animate-pulse max-md:w-full"></div>
                    <div className="w-10 h-4 bg-black-color-15 animate-pulse rounded-sm max-md:-order-1"></div>
                </div>
                <div className="h-4 rounded-sm bg-black-color-15 animate-pulse max-md:hidden"></div>
                <div className="w-3/4 h-4 rounded-sm bg-black-color-15 animate-pulse max-md:hidden"></div>
                <div className="w-2/4 h-4 rounded-sm bg-black-color-15 animate-pulse max-md:hidden"></div>
            </div>
        </div>
    )
}

export default EpisodeCardSkeleton;