import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      {/* top strip */}
      <div className="top-strip py-2 border-t border-b border-gray-300">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-medium">
                Get up to 50% off on new season styles, limited time only.
              </p>
            </div>

            <div className="col-2 flex items-center justify-end ">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] link font-medium transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
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
      {/* Header */}
      <div className="header">
        <div className="container flex items-center justify-between">
          <div className="col1">dfa</div>
          <div className="col2">dfad</div>
          <div className="col3">dfasd</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
