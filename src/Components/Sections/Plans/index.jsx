import SectionHeader from "@components/UI/SectionHeader";
import PlanSelector from "./Components/PlanSelector";
import plansData from "@data/plans.json";
import PlanCard from "./Components/PlanCard";
import { useState } from "react";

function Plans() {

    const [typePlan, setTypePlan] = useState('monthly');

    return (
        <section className="plans-section py-10" id="plans">
            {/* Section Header */}
            <SectionHeader
                title="Choose the plan that's right for you"
                description="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
            >
                <PlanSelector
                    setTypePlan={setTypePlan}
                    typePlan={typePlan}
                />
            </SectionHeader>
            <div className="container">
                <div className="plans-grid grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {
                        plansData.map((plan, index) => (<PlanCard
                            key={index}
                            plan={plan}
                            typePlan={typePlan}
                        />))
                    }
                </div>
            </div>
        </section>
    )
}

export default Plans;