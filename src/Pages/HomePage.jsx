import Devices from "@components/Sections/Devices";
import FAQs from "@components/Sections/FAQs";
import HeroSection from "@components/Sections/HeroSection";
import Plans from "@components/Sections/Plans";

function HomePage() {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <HeroSection />
            {/* Devices */}
            <Devices />
            {/* Faqs */}
            <FAQs />
            {/* Plans */}
            <Plans />
        </div>
    )
}

export default HomePage;