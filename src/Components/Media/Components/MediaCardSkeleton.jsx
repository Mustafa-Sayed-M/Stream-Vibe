function MediaCardSkeleton() {
    return (
        <div className="media-card-skeleton p-4 rounded-md bg-black-color-10 border border-black-color-15">
            {/* Poster */}
            <div className="aspect-[1/1.5] bg-black-color-15 rounded-md animate-pulse mb-3"></div>
            {/* Title */}
            <div className="h-4 rounded-sm bg-black-color-15 animate-pulse mb-4 w-3/4"></div>
            {/* Sub Info */}
            <div className="flex items-center justify-between mb-4">
                {/* Rating */}
                <div className="flex items-center gap-2">
                    <ul className="flex items-center gap-1">
                        {
                            Array.from({ length: 5 }).map((_, index) => (<li key={index} className="w-4 h-4 rounded-full bg-black-color-15 animate-pulse"></li>))
                        }
                    </ul>
                    <div className="w-4 h-4 bg-black-color-15 rounded-sm animate-pulse"></div>
                </div>
                {/* Year */}
                <div className="w-16 h-4 bg-black-color-15 rounded-sm animate-pulse"></div>
            </div>
            {/* Actions */}
            <div className="flex items-center justify-between">
                <div className="w-8 h-8 rounded-full animate-pulse bg-black-color-15"></div>
                <div className="w-24 h-8 rounded-sm animate-pulse bg-black-color-15"></div>
            </div>
        </div>
    )
}

export default MediaCardSkeleton;