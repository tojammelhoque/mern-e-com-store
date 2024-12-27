import { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import Sidebar from "./Sidebar/Sidebar";

function Navigation() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "Fashion", path: "/fashion" },
    { title: "New Arrivals", path: "/new-arrivals" },
    {
      title: "All Brands",
      path: "/all-brands",
      subMenu: [
        { title: "Nike", path: "/all-brands/nike" },
        { title: "Adidas", path: "/all-brands/adidas" },
        { title: "Puma", path: "/all-brands/puma" },
        { title: "Reebok", path: "/all-brands/reebok" },
        { title: "Under Armour", path: "/all-brands/under-armour" },
        { title: "New Balance", path: "/all-brands/new-balance" },
      ],
    },
    { title: "Blog", path: "/blog" },
  ];

  return (
    <>
      <nav className="py-4 bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Left Section: Shop By Category */}
          <div className="w-[20%]">
            <button
              onClick={toggleSidebar}
              className="text-black flex gap-2 items-center hover:text-[#ff5252] font-medium"
            >
              <RiMenu2Fill className="text-[20px]" />
              Shop By Category
              <IoIosArrowDown className="text-[20px] ml-auto" />
            </button>
          </div>

          {/* Center Section: Navigation Links */}
          <div className="w-[60%] relative">
            <ul className="flex items-center justify-center gap-8 ">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative list-none z-50"
                  onMouseEnter={() => setActiveMenu(item.title)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  <Link
                    to={item.path}
                    className="text-[16px] font-medium text-black hover:text-[#ff5252] transition-colors"
                  >
                    {item.title}
                  </Link>

                  {/* Submenu */}
                  {item.subMenu && activeMenu === item.title && (
                    <ul className="absolute left-0 top-full bg-white shadow-lg border p-4 space-y-2">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className="list-none">
                          <Link
                            to={subItem.path}
                            className="block text-[14px] text-gray-600 hover:text-[#ff5252] transition"
                          >
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section: Free Delivery */}
          <div className="w-[20%] flex items-center justify-end">
            <button className="text-black flex gap-2 items-center hover:text-[#ff5252]">
              <IoRocketOutline className="text-[20px]" />
              <span className="text-[16px] font-medium">
                Free International Delivery
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Navigation;
