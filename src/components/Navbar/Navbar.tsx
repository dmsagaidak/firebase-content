import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar navbar-expand navbar-dark bg-success">
      <div className="container-fluid">
        <span className="navbar-brand">ABCD</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/admin" className="nav-link">Admin</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/about" className="nav-link">About</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/contacts" className="nav-link">Contacts</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/news" className="nav-link">News</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/clients" className="nav-link">Clients</NavLink></li>
            <li className="nav-item"><NavLink to="/pages/services" className="nav-link">Services</NavLink></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Navbar;