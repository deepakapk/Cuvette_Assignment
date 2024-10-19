import axios from 'axios'
import React from 'react'
import { FaHome } from 'react-icons/fa'
import { LuLogOut } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const SideBar = () => {
  const navigateTo = useNavigate()

  const logout = async()=>{
    try{
      await axios.get("https://cuvette-assignment-backend-3lf7.onrender.com/api/v1/user/logout",{withCredentials:true}).then(()=>{
        toast.success("Logged Out Successfully!")
        navigateTo("/")
      })
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div className="w-20 h-full bg-white shadow-md">
      <div className="flex items-center justify-center h-16">
        <Link to={"/dashboard"}><FaHome className="text-2xl text-gray-600" /></Link>
      </div>
      <div className="flex items-center justify-center h-16">
        <LuLogOut className="text-2xl text-gray-600" onClick={logout}/>
      </div>
    </div>
  );
}

export default SideBar
