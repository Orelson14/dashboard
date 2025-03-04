import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineAreaChart, AiOutlineCaretUp, AiOutlineCaretDown, AiOutlineShoppingCart, AiOutlineBell, AiOutlineUser, AiOutlineSetting, AiOutlineQuestionCircle, AiOutlineLogout } from 'react-icons/ai';

function Sidebar() {
  return (
    <aside className="w-64 bg-[#1F2937] text-white p-4 flex flex-col">
            {/* Logo Upscale */}
      <div className="flex items-center justify-between mb-8"> 
          <div className="flex items-center">
            <img src="/logo.png" alt="Upscale Logo" className="w-8 h-8 mr-2" />
            <span className="text-2xl font-semibold">Upscale</span>
          </div>
        <div className="flex flex-col">
          <AiOutlineCaretUp className="text-gray-400" />
          <AiOutlineCaretDown className="text-gray-400" />
        </div>
      </div>
      <hr />

      <ul className="space-y-2">
        <li>
          <Link to="/" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <AiOutlineAreaChart className="mr-2 text-gray-400" />
            Overview
          </Link>
        </li>
        <li className="sidebar-inactive">
          <Link to="/products" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <AiOutlineShoppingCart className="mr-2 text-gray-400" />
            Products
          </Link>
        </li>
        <li className="sidebar-inactive">
          <Link to="/sales-report" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <AiOutlineAreaChart className="mr-2 text-gray-400" />
            Sales Report
          </Link>
        </li>
        <li className="sidebar-inactive">
          <Link to="/notifications" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <AiOutlineBell className="mr-2" />
            Notifications
          </Link>
        </li>
        <li className="sidebar-inactive">
          <Link to="/analytics" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <AiOutlineAreaChart className="mr-2 text-gray-400" />
            Analytics
          </Link>
        </li>
        <li className="sidebar-inactive">
          <Link to="/customers" className="flex items-center p-2 hover:bg-gray-700 rounded">
            <AiOutlineUser className="mr-2 text-gray-400" />
            Customers
          </Link>
        </li>
      </ul>

      <ul className="mt-auto space-y-2">
        <li className="sidebar-inactive">
          <span className="flex items-center p-2">
            <AiOutlineSetting className="mr-2" />
            Integrations
          </span>
        </li>
        <li className="sidebar-inactive">
          <span className="flex items-center p-2 ">
            <AiOutlineQuestionCircle className="mr-2" />
            Help Center
          </span>
        </li> <br />
        <hr />
        <li className="sidebar-inactive">
          <span className="flex items-center p-2 ">
            <AiOutlineLogout className="mr-2" />
            Logout
          </span>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;

//Poto, au niveau des liens situés en haut, faudra enlever la classe className="sidebar-inactive" pour qu'is redeviennent actifs