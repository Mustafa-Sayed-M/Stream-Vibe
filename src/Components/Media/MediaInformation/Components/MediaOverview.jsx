function MediaOverview({ className = "", overview = "", mediaDataIsLoading = false }) {
    return (
        <div className={`media-overview p-5 rounded-md border border-black-color-15 bg-black-color-10 ${className}`}>
            <p className="mb-3">Description</p>
            {
                mediaDataIsLoading ? (
                    <div className="space-y-3">
                        <div className="h-4 rounded-sm bg-black-color-15 animate-pulse"></div>
                        <div className="h-4 w-3/4 rounded-sm bg-black-color-15 animate-pulse"></div>
                        <div className="h-4 w-2/4 rounded-sm bg-black-color-15 animate-pulse"></div>
                    </div>
                ) : (
                    <p className="!text-white">{overview}</p>
                )
            }
        </div>
    )
}

export default MediaOverview;