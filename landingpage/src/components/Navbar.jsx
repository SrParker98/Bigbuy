import React from "react";
import { Form, Link } from "react-router-dom"; // Asume que estás usando react-router-dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import logo from "../assets/logo.svg";
import spain from "../assets/spain.png";
import "../style.css";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <nav className="navbar">
          <span>
            <img className="logo" src={logo} alt="" />
          </span>
          <div className="nav-link-box">
            <div></div>
            <Link className="link-nav" to="/">
              Conócenos <IoIosArrowDown />
            </Link>
            <Link className="link-nav" to="/">
              Soluciones <IoIosArrowDown />
            </Link>
            <Link className="link-nav" to="/">
              Tecnología & operaciones <IoIosArrowDown />
            </Link>
            <Link className="link-nav" to="/">
              Mayorista Dropshipping <IoIosArrowDown />
            </Link>
            <Link className="link-nav" to="/">
              Catálogo B2B <IoIosArrowDown />
            </Link>
          </div>
          <div className="search-bar">
            <FiSearch className="nav-icon" />
            <span>Iniciar sesión</span>
            <button>Crear cuenta</button>
            <MdEmail className="nav-icon" />
            <span>
              <img className="flag" src={spain} alt="" />
              <IoIosArrowDown className="nav-icon " />
            </span>

            <FaCartShopping className="nav-icon cart" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
