import SectionHeader from "@components/UI/SectionHeader";
import { Link } from "react-router-dom";
import faqsData from '@data/faqs.json';
import FaqCard from "./FaqCard";

function FAQs() {
    return (
        <section className="faqs-section py-10" id="faqs">
            {/* Section Header */}
            <SectionHeader
                title="Frequently Asked Questions"
                description="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
            >
                <Link
                    to={'/'}
                    className="block py-2 px-4 rounded-md bg-red-color-45 shadow-md"
                >Ask a Question</Link>
            </SectionHeader>
            <div className="container">
                <div className="faqs-grid grid lg:grid-cols-2 gap-5 items-start">
                    {
                        faqsData.map((faq, index) => (<FaqCard
                            faq={faq}
                            key={index}
                        />))
                    }
                </div>
            </div>
        </section>
    )
}

export default FAQs;