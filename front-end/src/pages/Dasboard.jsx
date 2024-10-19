import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Context } from "../main";


function Dashboard() {
  const {isAuthenticated} = useContext(Context)

  if(!isAuthenticated){
    return <Navigate to="/"/>
  }
  return (
    <div className="flex h-[90vh] bg-gray-50">
      <Sidebar/>
      <div className="flex flex-col w-full">

        <div className=" ml-4 mt-5 h-full">
          <Link className="px-6 py-3 mb-8 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          to={"/jobpost"}>
            Create Interview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
