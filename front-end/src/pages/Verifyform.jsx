import axios from "axios";
import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Context } from "../main";

const Vaerifyform = () => {

  const {isAuthenticated} = useContext(Context)
  const [emailOtp, setEmailOtp] = useState("")
  const [phoneOtp, setPhoneOtp] = useState("")
  const [isEmailVerified, setEmailVerified] = useState(false);
  const [isPhoneVerified, setPhoneVerified] = useState(false);

  const verifyEmailOpt = async(e)=>{
    e.preventDefault()
    try{

      await axios.post("https://cuvette-assignment-backend-3lf7.onrender.com/api/v1/user/verifyemail",{emailOtp},{withCredentials:true, headers:{"Content-Type":"application/json"}}).then(()=>{
        toast.success("Otp Verified")
        setEmailVerified(true)
      })
    }catch(error){
      toast.error(error.response.data.message)
    }
  }
  const verifyMobileOtp = async(e)=>{
    e.preventDefault()
    try{

      await axios.post("https://cuvette-assignment-backend-3lf7.onrender.com/api/v1/user/verifyphone",{phoneOtp},{withCredentials:true, headers:{"Content-Type":"application/json"}}).then(()=>{
        toast.success("Otp Verified")
        setPhoneVerified(true)
      })
    }catch(error){
      toast.error(error.response.data.message)
    }
  }

  if(isEmailVerified  && isPhoneVerified){return <Navigate to="/dashboard" />}

  return (
    <div className="flex-1 bg-white flex items-center justify-center h-[90vh]">
       <div className="flex-1 flex items-center justify-center">
        <div className="text-left p-6">
        
          <p className="mt-4 text-gray-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
      <div className="border-2 border-yellow-300 p-10 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-center">Sign Up</h2>
        <p className="text-sm text-gray-500 mb-6">
          Lorem Ipsum is simply dummy text
        </p>
        <form className="space-y-4">
          <div>
            <input
              type="Number"
              name="emailotp"
              value={emailOtp}
              onChange={(e)=>setEmailOtp(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Email OTP"
            />
          </div>

          <button
            type="submit" 
            onClick={verifyEmailOpt}
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
          >
            Verify
          </button>
          <div>
            <input
              type="Number"
              name="mobileotp"
              value={phoneOtp}
              onChange={(e)=>setPhoneOtp(e.target.value)}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Mobile OTP"
            />
          </div>

          <button
            type="submit"
            onClick={verifyMobileOtp}
            className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4"
          >
            Verify
          </button>
        </form>


      </div>
      </div>
    </div>
  );
};

export default Vaerifyform;
