import React, { useRef, useEffect } from "react";
import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar-icon.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/doctors",
    display: "Find",
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
            <img src={logo} alt="logo" />
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
            <div className="hidden">
              <Link to="/">
                <figure className="w-[35px] h-[35px] rounded-full cursor-pointer">
                  <img
                    src={avatar}
                    className="w-full rounded-full"
                    alt="avatar"
                  />
                </figure>
              </Link>
            </div>

            <Link to="/login">
              <button className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] flex items-center justify-center rounded-[50px]">
                Login
              </button>
            </Link>

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
