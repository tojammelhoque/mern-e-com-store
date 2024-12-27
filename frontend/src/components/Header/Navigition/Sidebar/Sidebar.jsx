


import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

const Sidebar = ({ isOpen, onClose }) => {
  // State to track which submenu is open
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  // Function to toggle submenus
  const handleToggleSubMenu = (index) => {
    setOpenSubMenuIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300`}
    >
      {/* Sidebar Content */}
      <div className="w-64 bg-white h-full shadow-lg z-50">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-bold">Categories</h2>
          <button onClick={onClose} className="text-gray-500">
            <IoClose className="text-2xl" />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {SidebarData.map((item, index) => (
            <li key={index}>
              <div>
                {/* Main Menu Item */}
                <button
                  onClick={() => handleToggleSubMenu(index)}
                  className="flex justify-between items-center w-full text-black hover:text-[#ff5252] transition-colors"
                >
                  <span>{item.title}</span>
                  {item.subMenu && item.subMenu.length > 0 && (
                    <span>{openSubMenuIndex === index ? "-" : "+"}</span>
                  )}
                </button>

                {/* Submenu Items */}
                {item.subMenu && openSubMenuIndex === index && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {item.subMenu.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.path}
                          className="text-gray-700 hover:text-[#ff5252] transition-colors block"
                        >
                          {subItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      <div
        className="bg-black bg-opacity-50 w-full h-full"
        onClick={onClose}
      ></div>
    </div>
  );
};

export default Sidebar;
