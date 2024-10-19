import React, { useContext, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../main';
import { Navigate, useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    companyName: '',
    email: '',
    employeeSize: '',
  });

  const navigateTo = useNavigate()
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        await axios.post("http://localhost:4000/api/v1/user/register",formData,{withCredentials:true, headers:{"Content-Type":"application/json"}}).then((res)=>{
          setIsAuthenticated(true);
          navigateTo("/verify");
          toast.success(res.data.message);
          })

    }catch(error){
        toast.error(error.response.data.message);
    }
  };

  if(isAuthenticated){
    navigateTo("/dashboard")
  }


  return (
    <div className="flex ">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-left p-6">
        
          <p className="mt-4 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>

      <div className="flex-1 bg-white flex items-center justify-center">
        <div className="border-2 border-yellow-300 p-10 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Sign Up</h2>
          <p className="text-sm text-gray-500 mb-6">Lorem Ipsum is simply dummy text</p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Phone no.</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter your phone number"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Company Name</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter company name"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Company Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter company email"
              />
            </div>

            <div>
              <label className="block mb-1 text-gray-700">Employee Size</label>
              <input
                type="number"
                name="employeeSize"
                value={formData.employeeSize}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Enter employee size"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
            >
              Proceed
            </button>
          </form>

          <p className="text-sm text-gray-500 mt-4">
            By clicking on proceed you will accept our{' '}
            <a href="#" className="text-blue-600 underline">
              Terms & Conditions
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;