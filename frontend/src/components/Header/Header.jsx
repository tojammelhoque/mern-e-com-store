import { Link } from "react-router-dom";
import { FaCartPlus, FaRegHeart } from "react-icons/fa";
import { IoGitCompareOutline } from "react-icons/io5";
import Search from "./Search/Search";
import Tooltip from "@mui/material/Tooltip";
import Navigition from "./Navigition/Navigition";

function Header() {
  return (
    <header className="bg-white">
      {/* Top Strip */}
      <div className="top-strip py-2 border-t border-b border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="w-[50%]">
              <p className="text-[12px] font-medium">
                Get up to 50% off on new season styles, limited time only.
              </p>
            </div>
            <div className="flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li>
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-medium transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/order-tracking"
                    className="text-[13px] link font-medium transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="header py-4 border border-gray-300">
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <div className="w-[25%]">
            <Link to="/">
              <img src="/images/logo.jpg" alt="logo" />
            </Link>
          </div>

          {/* Search */}
          <div className="w-[45%]">
            <Search />
          </div>

          {/* User Options */}
          <div className="w-[30%] flex items-center justify-end gap-10">
            {/* Login/Register */}
            <div>
              <ul className="flex items-center gap-3">
                <li>
                  <Link
                    to="/login"
                    className="text-[15px] link font-medium transition"
                  >
                    Login
                  </Link>
                </li>
                <li>|</li>
                <li>
                  <Link
                    to="/register"
                    className="text-[15px] link font-medium transition"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* Icons Section */}
            <div>
              <ul className="flex items-center gap-5">
                {/* Compare */}
                <li>
                  <Link className="link transition" to="/compare">
                    <Tooltip title="Compare" placement="bottom" arrow>
                      <button
                        data-ripple-light="true"
                        data-tooltip-target="tooltip-compare"
                        className="relative"
                      >
                        <IoGitCompareOutline className="text-[23px]" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                          2
                        </span>
                      </button>
                    </Tooltip>
                  </Link>
                </li>
                {/* Wishlist */}
                <li>
                  <Link className="link transition" to="/wishlist">
                    <Tooltip title="Wishlist" placement="bottom" arrow>
                      <button className="relative">
                        <FaRegHeart className="text-[23px]" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                          2
                        </span>
                      </button>
                    </Tooltip>
                  </Link>
                </li>
                {/* Cart */}
                <li>
                  <Link className="link transition" to="/cart">
                    <Tooltip title="Cart" placement="bottom" arrow>
                      <button
                        data-ripple-light="true"
                        data-tooltip-target="tooltip-cart"
                        className="relative"
                      >
                        <FaCartPlus className="text-[23px]" />
                        <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
                          2
                        </span>
                      </button>
                    </Tooltip>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Navigition />
    </header>
  );
}

export default Header;
