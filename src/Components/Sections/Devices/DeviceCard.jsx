function DeviceCard({ deviceData: { icon, name, description } }) {
    return (
        <div className='device-card p-10 bg-black-color-6 rounded-md border border-black-color-15 shadow-md overflow-hidden relative before:absolute before:w-[200px] before:h-[200px] before:bg-red-color-45/10 before:blur-2xl before:-top-[100px] before:-right-[50px] before:rounded-[30%]'>
            {/* Header */}
            <div className="header flex items-center gap-3 mb-3 relative z-10">
                {/* Icon */}
                <div className="icon-container w-12 h-12 rounded-md bg-black-color-8 border border-black-color-12 flex items-center justify-center">
                    <img
                        src={icon}
                        alt="Device Icon"
                    />
                </div>
                {/* Name */}
                <h3 className="font-semibold text-xl">{name}</h3>
            </div>
            {/* Description */}
            <p className="relative z-10">{description}</p>
        </div>
    )
}

export default DeviceCard;