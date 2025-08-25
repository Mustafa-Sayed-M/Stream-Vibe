import { Link } from "react-router-dom";

function CTA() {
    return (
        <section className="cta-section py-20" id="cta">
            <div className="container">
                <div
                    style={{
                        backgroundImage: "url(/assets/images/cta-bg.png)",
                        backgroundSize: "cover"
                    }}
                    className="content-container flex items-center justify-between max-lg:flex-col gap-y-5 px-10 max-lg:py-10 lg:py-20 rounded-xl relative before:absolute before:left-0 before:top-0 before:w-full before:h-full before:rounded-xl before:bg-gradient-to-r before:from-black-color-6 before:to-red-color-45/30"
                >
                    {/* Text Container */}
                    <div className="text-container relative z-10">
                        <h2 className="font-semibold text-3xl mb-2">Start your free trial today!</h2>
                        <p className="max-sm:line-clamp-2 max-md:line-clamp-3">This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</p>
                    </div>
                    {/* Btn Action */}
                    <Link
                        to={'/'}
                        className="block py-2 px-4 rounded-md bg-red-color-45 relative z-10 max-lg:w-full text-center"
                    >
                        Start a Free Trail
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CTA;