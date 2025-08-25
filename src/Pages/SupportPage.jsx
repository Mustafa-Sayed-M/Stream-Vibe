import ContactForm from "@components/Sections/ContactForm";
import FAQs from "@components/Sections/FAQs";

function SupportPage() {
    return (
        <div className="support-page">
            {/* Contact Form */}
            <ContactForm />
            {/* Faqs */}
            <FAQs />
        </div>
    )
}

export default SupportPage;