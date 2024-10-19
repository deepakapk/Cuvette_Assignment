// src/components/ApplicationPage.jsx
import { useContext, useState } from "react";
import { FiSend } from "react-icons/fi";
import { HiOutlineMail } from "react-icons/hi";
import { BsCalendar } from "react-icons/bs";
import SideBar from "../components/SideBar";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../main";
import { Navigate } from "react-router-dom";

const ApplicationPage = () => {
  const {isAuthenticated} = useContext(Context)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    level: "",
    candidate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if(!isAuthenticated){
    return <Navigate to="/"/>

  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
        await axios.post("https://cuvette-assignment-backend-3lf7.onrender.com/api/v1/job/jobpost",formData,{withCredentials:true,headers:{"Content-Type":"application/json"}}).then(()=>{
            toast.success("Job Posted Successfully!")
        })
    }catch(error){
        toast.error(error.response.data.message)
    }
  };

  return (
    <>
     <div className="flex h-[90vh] bg-gray-50">
     <SideBar />
    <div className="h-[80vh] bg-white flex flex-col items-center p-8 w-screen">
      <div className="w-full max-w-2xl bg-gray-50 rounded-lg shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Create Job Application</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Job Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Job Title"
            />
          </div>

          {/* Job Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Job Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter Job Description"
            />
          </div>

          {/* Experience Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Experience Level</label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full mt-1 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Select Experience Level</option>
              <option value="Internship">Internship</option>
              <option value="Fresher">Fresher</option>
              <option value="Experienced">Experienced</option>
            </select>
          </div>

          {/* Add Candidate */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Add Candidate</label>
            <div className="flex items-center mt-1 space-x-2 border rounded-md p-2">
              <HiOutlineMail className="text-pink-500" />
              <input
                type="email"
                name="candidate"
                value={formData.candidate}
                onChange={handleChange}
                className="w-full outline-none"
                placeholder="Enter candidate email"
              />
            </div>
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700">End Date</label>
            <div className="flex items-center mt-1 space-x-2 border rounded-md p-2">
              <BsCalendar className="text-gray-500" />
              <input
                type="date"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className="w-full outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 flex justify-center items-center space-x-2"
          >
            <FiSend />
            <span>Send</span>
          </button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default ApplicationPage;
