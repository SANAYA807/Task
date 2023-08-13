import React from "react";
const InputField = ({ value, handleChange, name }) => {
    return (
        <div className="flex flex-col space-y-1">
            <label
                className="text-sm mt-4 text-left text-gray-700"
                htmlFor="name"
            >
                {name}
            </label>
            <input
                className="border py-1.5 focus:outline-none text-sm rounded-md pl-2"
                type={name}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={`Enter ${name}`}
            />
        </div>
    );
}
export default InputField;