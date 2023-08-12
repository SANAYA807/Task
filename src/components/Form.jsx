import React, { useState } from 'react'
import { API } from '../config';
import InputField from './InputField';

function Form() {
    const [formData, setFormData] = useState({
        title: "",
        price: "",
        discount: "",
        desc: "",
    });
    const formFields = ['title', 'price', 'discount', 'description'];
    const handleFormData = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = JSON.stringify(formData);
        fetch(API, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: data,
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
    };
    return (
        <form onSubmit={handleSubmit}>
            {formFields?.map((item) => <InputField key={item} label={item} handleFormData={handleFormData} />)}
            <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="formButton submitButton">Submit</button>
            </div>
        </form>
    )
}


export default Form