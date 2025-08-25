function YearInfo({ releaseDate = "", firstAirDate = "", mediaDataIsLoading = false }) {
    return (
        <div className="year-info mb-4">
            <p className="mb-2">
                <i className="fa-solid fa-calendar fa-fw"></i>
                <span className="ms-2">Release Year</span>
            </p>
            {
                mediaDataIsLoading ? (
                    <div className="bg-black-color-15 animate-pulse h-6 w-36 rounded-sm"></div>
                ) : (
                    <h3>{releaseDate || firstAirDate || "Unknown"}</h3>
                )
            }
        </div>
    )
}

export default YearInfo;