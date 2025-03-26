import { useState, useContext } from "react";
import {
  FiMenu,
  FiX,
  FiFileText,
  FiUsers,
  FiMapPin,
  FiSun,
  FiLogOut,
  FiPlusCircle,
} from "react-icons/fi";
import logo from "../static/img/logo.png";
import { NavLink } from "react-router-dom";
import Context from "../context/Contexts";
const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { logOutHandler } = useContext(Context.UserContext);
  const toggleSidebar = () => setIsExpanded(!isExpanded);

  const navigation = [
    {
      id: "dashboard",
      icon: <FiPlusCircle />,
      label: "Generate Invoice",
      to: "/",
    },
    {
      id: "invoices",
      icon: <FiFileText />,
      label: "Invoices",
      to: "/invoices",
    },
    { id: "users", icon: <FiUsers />, label: "Users", to: "/users" },
    { id: "cities", icon: <FiMapPin />, label: "Cities", to: "/cities" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 h-screen transition-all duration-300 ease-in-out shadow-lg z-[99] bg-base-200 ${
        isExpanded ? "w-64" : "w-20"
      } `}
    >
      <div className="flex flex-col h-full">
        {/* Header/Logo Section */}
        <div className="p-4 flex items-center justify-between border-b border-gray-200 bg-base-300">
          <div className="flex items-center">
            <div className="avatar h-10 w-10">
              <div className="w-24 rounded-full">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            {isExpanded && (
              <span className="ml-3 text-lg font-semibold">
                Siddhi Transport
              </span>
            )}
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="flex-1 p-2">
          <ul className="menu w-full gap-y-2">
            {navigation.map((item) => (
              <li key={item.id}>
                <NavLink
                  to={item.to}
                  className={`flex items-center w-full rounded-lg transition-colors`}
                >
                  <span className="text-xl">{item.icon}</span>
                  {isExpanded && <span className="ml-3">{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer Section */}
        <div className="p-4 border-t border-gray-500 bg-base-300">
          {/* Theme Toggle */}
          {/* <button className="btn btn-sm btn-neutral flex items-center w-full rounded-lg mb-2">
            <FiSun />
            {isExpanded && <span className="ml-3">Dark Mode</span>}
          </button> */}

          {/* Logout Button */}
          <button
            className="btn btn-sm btn-neutral flex items-center w-full rounded-lg mb-2"
            onClick={logOutHandler}
          >
            <span className="text-xl">
              <FiLogOut />
            </span>
            {isExpanded && <span className="ml-3">Logout</span>}
          </button>

          {/* Toggle Sidebar Button */}
          <button
            onClick={toggleSidebar}
            className="btn btn-sm btn-neutral flex items-center w-full rounded-lg mb-2"
          >
            <span className="text-xl">{isExpanded ? <FiX /> : <FiMenu />}</span>
            {isExpanded && (
              <span className="ml-3">{isExpanded ? "Collapse" : "Expand"}</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
