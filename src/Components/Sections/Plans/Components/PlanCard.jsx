function PlanCard({ typePlan = "monthly", plan: { name = "", description = "", price = {} } }) {
    return (
        <div className="plan-card bg-black-color-10 border border-black-color-15 rounded-md shadow-md p-5">
            {/* Name */}
            <h3 className="font-semibold text-xl mb-3">{name}</h3>
            {/* Description */}
            <p className="mb-5">{description}</p>
            {/* Price */}
            <div className="price flex items-end mb-7">
                <h4 className="text-4xl">${price[typePlan]}</h4>
                <p>/month</p>
            </div>
            {/* Actions */}
            <div className="plan-actions flex sm:items-center gap-3 max-sm:flex-col">
                {/* Start */}
                <button
                    aria-label="Start Free Trail"
                    title="Start Free Trail"
                    className="py-3 rounded-md bg-black-color-8 border border-black-color-15 flex-1 sm:hover:bg-black-color-10 transition"
                >Start Free Trail</button>
                {/* Choose */}
                <button
                    aria-label="Start Free Trail"
                    title="Start Free Trail"
                    className="py-3 rounded-md bg-red-color-45 flex-1 sm:hover:bg-red-color-45/80 transition"
                >Choose Plan</button>
            </div>
        </div>
    )
}

export default PlanCard;