function SectionHeader({ className = "", title = "", description = "", children }) {
    return (
        <div className={`section-header mb-10 ${className}`}>
            <div className={`container flex md:items-center gap-7 ${children ? "max-md:flex-col" : ""}`}>
                {/* Main Content */}
                <div className="main-content flex-1">
                    <h2 className="font-semibold mb-3 text-lg sm:text-xl md:text-3xl">{title}</h2>
                    <p className={`${children ? "md:max-w-3/4" : ""} max-lg:line-clamp-4 max-md:line-clamp-3 max-sm:line-clamp-2`}>{description}</p>
                </div>
                {/* Children */}
                {children}
            </div>
        </div>
    )
}

export default SectionHeader;