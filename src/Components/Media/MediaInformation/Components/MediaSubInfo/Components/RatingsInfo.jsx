function RatingsInfo({ voteAverage = 1, voteCount = 1, mediaDataIsLoading = false }) {
    return (
        <div className="ratings-info">
            <p className="mb-2">
                <i className="fa-solid fa-star fa-fw"></i>
                <span className="ms-2">Rating</span>
            </p>
            <div className="flex items-center justify-between gap-2">
                {
                    mediaDataIsLoading ? (
                        <>
                            <div className="w-full bg-black-color-15 animate-pulse h-10 rounded-sm"></div>
                            <div className="w-full bg-black-color-15 animate-pulse h-10 rounded-sm"></div>
                        </>
                    ) : (
                        <>
                            {/* Vote Average */}
                            <div className="py-2 w-full bg-black-color-8 p-2 rounded-md border border-black-color-15">
                                <i className="fa-solid fa-star fa-fw text-red-color-45"></i>
                                <span className="ms-2">{voteAverage}</span>
                            </div>
                            {/* Vote Count */}
                            <div className="py-2 w-full bg-black-color-8 p-2 rounded-md border border-black-color-15">
                                <i className="fa-solid fa-user fa-fw text-red-color-45"></i>
                                <span className="ms-2">{voteCount}</span>
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default RatingsInfo;