import React, { useContext } from 'react';
import { Context } from '../main';
import logo from "../assets/logo.svg"

const Navbarcuvv = () => {
    
      return (
        <nav className="flex items-center justify-between py-4 px-6 bg-white">
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <img src={logo} className='w-20' alt="" />
            </div>
          </div>

          <div>

          <span className="text-xl font-medium text-gray-700 cursor-pointer mr-3">
          Contact
          </span>
          </div>
          
        </nav>
      );
    };

    export default Navbarcuvv;