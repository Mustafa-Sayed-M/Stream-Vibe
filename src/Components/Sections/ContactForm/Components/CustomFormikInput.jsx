import { ErrorMessage } from "formik";

function CustomFormikInput({ input: { label, ...inputData } }) {
    return (
        <div className="input-group">
            {/* Label */}
            <label htmlFor={inputData.id}>{label}</label>
            {/* Input Field */}
            <input
                {...inputData}
                className="block p-2 rounded-md bg-black-color-8 border border-black-color-15 w-full mt-2"
            />
            {/* Error Message */}
            <ErrorMessage name={inputData.name} component={'div'} className="mt-2 text-red-color-45" />
        </div>
    )
}

export default CustomFormikInput;