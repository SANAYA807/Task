import React from 'react'

const InputField = ({ label, handleFormData }) => {
    return (
        <div className="formItem">
            <label style={{ textTransform: 'capitalize' }}>{label}</label>
            <input
                type="text"
                id={label}
                name={label}
                onChange={handleFormData}
                placeholder={`Enter Product ${label}`}
            />
        </div>
    );
}

export default InputField