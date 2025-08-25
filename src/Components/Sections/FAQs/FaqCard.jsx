import { useState } from "react";

function FaqCard({ faq: { id = 1, question = "", answer = "" } }) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-card">
            <label className={`flex items-center gap-4 p-5 border-b border-b-red-color-45/50 rounded-b-md transition cursor-pointer ${isOpen ? "bg-black-color-12/40" : "sm:hover:bg-black-color-12/40"}`}>
                <input
                    name={`faq-${id}`}
                    type="checkbox"
                    className="hidden peer"
                    onChange={e => setIsOpen(e.target.checked)}
                />
                {/* Faq Number */}
                <div className="faq-number w-10 h-10 leading-10 text-center rounded-md bg-black-color-12 border border-black-color-15">
                    {(id || 1).toString().padStart(2, '0')}
                </div>
                {/* Main Content */}
                <div className="faq-main-content flex-1">
                    {/* Question */}
                    <h3 className="font-semibold text-lg sm:text-xl">{question}</h3>
                    {/* Answer */}
                    {
                        isOpen && <p className="mt-3">{answer}</p>
                    }
                </div>
                {/* Btn Toggler */}
                <button
                    title=""
                    aria-label="Faq Open Toggler"
                    className="faq-open-toggler text-2xl"
                >
                    <i className={`fa-solid fa-${isOpen ? "minus" : "plus"} fa-fw`}></i>
                </button>
            </label>
        </div>
    )
}

export default FaqCard;