import React, { useState, useEffect } from 'react';
import { FileEarmarkTextFill } from 'react-bootstrap-icons';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close sidebar if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        !event.target.closest('.navbar-sidebar') &&
        !event.target.closest('.navbar-sidebar-icon')
      ) {
        closeSidebar();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebarOpen]);

  return (
    <div style={{ backgroundColor: '#daa520', color: '#fffaf0', zIndex: 10 }}>
      <nav className="navbar navbar-expand-lg navbar-light p-0 m-0">
        <div className="container-fluid">
          <div
            className="navbar-brand d-flex align-items-center"
            style={{ color: '#fffaf0', fontSize: '30px', fontWeight: '600' }}
          >
            <div className="me-3 mb-2">
              <FileEarmarkTextFill />
            </div>
            <div>Resume Builder</div>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="flex-grow-1"></div>
            <div className="navbar-nav mb-2 ms-5 d-flex align-items-center">
              <li className="nav-item dropdown">
                <Link
                  to="#"
                  className="nav-link dropdown-toggle me-4"
                  style={{
                    textDecoration: 'none',
                    color: '#fffaf0',
                    fontSize: '20px',
                  }}
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Resume Templates
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ backgroundColor: '#daa520', border: 'none' }}
                >
                  <li>
                    <Link
                      to="/home"
                      className="dropdown-item"
                      style={{ color: '', fontSize: '20px' }}
                    >
                      Resume Templates
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/cover-letter"
                      className="dropdown-item"
                      style={{ color: '', fontSize: '20px' }}
                    >
                      Cover Letter
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  to="/myresume"
                  className="nav-link active me-4"
                  style={{ textDecoration: 'none', color: '#fffaf0', fontSize: '20px' }}
                >
                  My Resume
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  style={{ textDecoration: 'none', color: '#fffaf0', fontSize: '20px' }}
                >
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/speech-to-text"
                  className="nav-link active me-4"
                  style={{ textDecoration: 'none', color: '#fffaf0', fontSize: '20px' }}
                >
                  SpeechToText
                </Link>
              </li>
              <li className="nav-item">
                <FaBars 
                  className="navbar-sidebar-icon"
                  onClick={toggleSidebar}
                />
              </li>
            </div>
          </div>
        </div>
      </nav>
      <div className={`navbar-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="navbar-sidebar-content">
          <ul>
            <li><Link to="/profile" onClick={closeSidebar}>Profile</Link></li>
            <li><Link to="/feedback" onClick={closeSidebar}>Feedback</Link></li>
            <li><Link to="/faqs" onClick={closeSidebar}>FAQs</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
