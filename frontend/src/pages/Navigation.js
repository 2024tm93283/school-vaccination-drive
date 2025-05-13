// src/pages/Navigation.js
import React from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';

export default function Navigation({setLoggedIn}) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false); // update state
    navigate('/');
  };

  return (
    <nav className="nav-bar" style={{ position: "relative", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div className="nav-left" style={{ display: "flex", gap: "15px" }}>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
        <NavLink to="/students" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Students</NavLink>
        <NavLink to="/drives" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Drives</NavLink>
        <NavLink to="/reports" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Reports</NavLink>
      </div>

      {/* Centered title with absolute positioning */}
      <h2 style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        margin: 0,
        fontSize: "1.2rem",
        whiteSpace: "nowrap"
      }}>
        School Vaccination Portal
      </h2>

      <div style={{ display: "flex", alignItems: "center" }}>
        <button style={{ padding: "7px 7px" }} onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
}

// className="nav-right"
