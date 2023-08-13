import { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";

export function ProductDetail() {
  const [value, setValue] = useState({
    name: '',
    email: '',
    contact: '',
    pincode: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(value)
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setValue({ ...value, [name]: value })

  }
  return (
    <>
      <h1>Product Detail Page</h1>
      <div className="max-w-7xl mx-auto mt-16">
        <div className="max-w-3xl py-6 border mx-auto">
          <div className="py-5 space-y-4 flex flex-col justify-center items-center">
            <h1 className="font-bold text-lg">Add Product Detail</h1>
            <form className="space-y-1" onSubmit={handleSubmit}>
              {['name', 'email', 'contact', 'pincode'].map(item => <InputField name={item} value={value.item} key={item} handleChange={handleChange} />)}
              <div className="w-full flex justify-center">
                <Button name={'Submit'} />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

