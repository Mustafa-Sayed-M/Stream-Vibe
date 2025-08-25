import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import CustomFormikInput from "./Components/CustomFormikInput";
import ContactHero from "./Components/ContactHero";

const fieldsData = [
    {
        id: "firstName",
        type: "text",
        label: "First Name",
        name: "first_name",
        autoComplete: "on",
        placeholder: "Enter First Name",
    },
    {
        id: "lastName",
        type: "text",
        label: "Last Name",
        name: "last_name",
        autoComplete: "on",
        placeholder: "Enter Last Name",
    },
    {
        id: "email",
        type: "email",
        label: "Email",
        name: "email",
        autoComplete: "on",
        placeholder: "Entre your Email",
    }
];
const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    message: "",
    conditions: false
};
const validationSchema = Yup.object({
    first_name: Yup.string()
        .required("First name is required")
        .min(4, "First name must be at least 4 characters")
        .max(16, "First name cannot be more than 16 characters"),

    last_name: Yup.string()
        .required("Last name is required")
        .min(2, "Last name must be at least 2 characters")
        .max(16, "Last name cannot be more than 16 characters"),

    email: Yup.string()
        .email("Please enter a valid email address")
        .required("Email is required"),

    phone: Yup.string()
        .matches(/^[0-9]+$/, "Phone must contain only numbers")
        .min(10, "Phone must be at least 10 digits")
        .max(15, "Phone cannot exceed 15 digits"),

    message: Yup.string()
        .required("Message is required")
        .min(10, "Message must be at least 10 characters")
        .max(100, "Message cannot exceed 100 characters"),

    conditions: Yup.bool()
        .oneOf([true], "You must accept the terms and conditions"),
});

function ContactForm() {
    return (
        <section className="contact-form-section py-10" id="contactForm">
            <div className="container grid lg:grid-cols-3 gap-10">
                {/* Contact Hero */}
                <ContactHero />
                {/* Contact Form */}
                <div className="bg-black-color-6 border border-black-color-15 rounded-xl sm:p-5 lg:col-span-2">
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                            setValues,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting
                        }) => (
                            <form onSubmit={handleSubmit}>
                                {/* Inputs Wrapper */}
                                <div className="inputs-wrapper grid md:grid-cols-2 gap-5 mb-5">
                                    {
                                        fieldsData.map((inputData, index) => (<CustomFormikInput
                                            key={index}
                                            input={{
                                                ...inputData,
                                                onChange: handleChange,
                                                onBlur: handleBlur
                                            }}
                                        />))
                                    }
                                    {/* Message Field */}
                                    <div className="message-group lg:col-span-2">
                                        {/* Label */}
                                        <label htmlFor="message">Message</label>
                                        {/* message Field */}
                                        <textarea
                                            id="message"
                                            name="message"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            placeholder="Enter Your Message"
                                            className="block p-2 rounded-md bg-black-color-8 border border-black-color-15 w-full mt-2 resize-none min-h-[180px] max-h-[1000px]"
                                        ></textarea>
                                        {/* Error Message */}
                                        <ErrorMessage name="message" component={'div'} className="mt-2 text-red-color-45" />
                                    </div>
                                </div>
                                {/* Submit */}
                                <div className="submit-wrapper flex sm:items-center justify-between max-sm:flex-col gap-y-3">
                                    {/* Submit Conditions */}
                                    <div
                                        className="submit-conditions flex items-center gap-2"
                                    >
                                        <label className="custom-checkbox">
                                            <input
                                                id="conditions"
                                                type="checkbox"
                                                onChange={(e) => {
                                                    setValues({ conditions: e.target.checked })
                                                }}
                                                name="conditions"
                                                className="hidden peer"
                                            />
                                            {/* Checkbox */}
                                            <div className="w-6 h-6 rounded-sm border cursor-pointer border-black-color-15 flex items-center justify-center text-sm transition peer-checked:border-red-color-45 [&>i]:transition [&>i]:scale-0 peer-checked:[&>i]:scale-100">
                                                <i className="fa-solid fa-check fa-fw"></i>
                                            </div>
                                        </label>
                                        <label htmlFor="conditions" className="text-grey-color-60 font-medium select-none">I agree with Terms of Use and Privacy Policy</label>
                                    </div>
                                    {/* Submit Btn */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="py-2 px-4 rounded-md bg-red-color-45"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;