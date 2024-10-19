import React, { useContext, useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbarcuvv from './components/Navbar';
import SignUpForm from './pages/SignUpForm';
import VerifyPage from './pages/Verifyform';
import Dashboard from './pages/Dasboard';
import ApplicationPage from './pages/ApplicationPage';
import { Context } from './main';
import axios from 'axios';

const App = () => {

  const {isAuthenticated, setIsAuthenticated} = useContext(Context)

  useEffect(() => {
    const fetchUser = async() => {
      try{
        const response = await axios.get("http://localhost:4000/api/v1/user/getuser",{withCredentials:true})
        setIsAuthenticated(true)
      } catch(error){
        setIsAuthenticated(false)
      }
    }
    fetchUser()
  }, [isAuthenticated])


  return (
    <>
     <Router>
        <Navbarcuvv/>
        <Routes>
          <Route path="/" element={<SignUpForm/>} />
          <Route path="/verify" element={<VerifyPage/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/jobpost" element={<ApplicationPage/>} />
        </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      </Router>
      
    </>
  )
}

export default App
