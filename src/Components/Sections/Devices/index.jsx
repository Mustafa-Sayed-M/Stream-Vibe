import SectionHeader from '@components/UI/SectionHeader';
import devicesData from '@data/devices.json';
import DeviceCard from './DeviceCard';

function Devices() {
    return (
        <section className="devices-section py-10" id="devices">
            {/* Section Header */}
            <SectionHeader
                title="We Provide you streaming experience across various devices."
                description="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
            />
            <div className="container">
                {/* Devices Cards Grid */}
                <div className='devices-cards-grid grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                    {
                        devicesData.map((device, index) => (<DeviceCard deviceData={device} key={index} />))
                    }
                </div>
            </div>
        </section>
    )
}

export default Devices;