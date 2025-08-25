const PlanSelectorBtn = ({ isActive = false, typePlan = "Monthly", setTypePlan = () => { } }) => {
    return (
        <button
            title={`${typePlan} Plans`}
            aria-label={`${typePlan} Plans`}
            onClick={() => {
                setTypePlan(prev => prev.toLowerCase() === 'monthly' ? "yearly" : "monthly")
            }}
            className={`py-3 px-4 rounded-md capitalize ${isActive ? "bg-black-color-12" : "sm:hover:bg-black-color-12"} transition`}
        >
            {typePlan}
        </button>
    )
};

function PlanSelector({ typePlan = "", setTypePlan = () => { } }) {
    return (
        <div className="plan-selector flex items-center gap-3 bg-black-color-6 p-2 rounded-md border border-black-color-15 max-lg:*:w-full">
            <PlanSelectorBtn
                setTypePlan={setTypePlan}
                typePlan="Monthly"
                isActive={typePlan === "monthly"}
            />
            <PlanSelectorBtn
                setTypePlan={setTypePlan}
                typePlan="Yearly"
                isActive={typePlan === "yearly"}
            />
        </div>
    )
}

export default PlanSelector;