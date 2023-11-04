import React, { useRef, useEffect, useContext } from "react";
import logo from "../../assets/images/logo.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { authContext } from "../../context/AuthContext";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find Doctor",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const { user, role, token } = useContext(authContext);

  const handleStickyHeader = () => {
    window.addEventListener("scroll", () => {
      // Check if the vertical scroll position is greater than 80 pixels
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    });
  };

  useEffect(() => {
    // Initialize the sticky header behavior
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  });

  // Function to toggle the visibility of the menu
  const toggleMenu = () => menuRef.current.classList.toggle("show_menu");

  return (
    <header className="flex items-center header" ref={headerRef}>
      <div className="container">
        <div className="flex items-center justify-between">
          {/*  =========== logo =========== */}

          <div>
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>

          {/*  =========== menu =========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-[2.7rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "hover:text-primaryColor text-textColor text-[16px] leading-7 font-[600]"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/*  =========== nav-right =========== */}
          <div className="flex items-center gap-4">
            {token && user ? (
              <div className="flex items-center ">
                <h2 className="text-[18px]">{user?.name}</h2>
                <Link
                  to={
                    role === "doctor"
                      ? "/doctors/profile/me"
                      : "/users/profile/me"
                  }
                >
                  <figure className="w-[55px] h-[55px] rounded-full cursor-pointer ml-5 overflow-hidden">
                    <img
                      src={user?.photo}
                      className="object-cover w-full rounded-full"
                      alt="avatar"
                    />
                  </figure>
                </Link>
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                  Login
                </button>
              </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
