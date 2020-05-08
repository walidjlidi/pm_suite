import React from 'react';
import { Link } from 'react-router-dom';

function GuestNav () {
  return (
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">P.M Suite</a>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link to="/login" className="nav-link" >Login </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/register" className="nav-link">Register</Link>
                  </li>
              </ul>
          </div>
      </nav>
  );
};

export default GuestNav;
