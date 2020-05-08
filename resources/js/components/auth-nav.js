import React, { useState } from 'react';
import { NavLink, Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/auth';
import { setIntendedUrl } from '../utils/auth';

const AuthNav= () => {
  let {setCurrentUser, setToken, currentUser} = useAuth();
  let history = useHistory();
  let [hideMobileNav, setHideMobileNav] = useState(true);

  const toggleMobileNav = () => setHideMobileNav(prevState => !prevState);
  const closeMobileNav = () => setHideMobileNav(true);

  const handleLogout = () => {
    setCurrentUser(null);
    setToken(null);
    history.push('/');
    setIntendedUrl(null);
  };

  return (
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                  aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">P.M Suite</a>

          <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
              <ul className="navbar-nav ml-auto">
                  <li
                      onClick={closeMobileNav}
                      className="nav-item">
                      <NavLink
                          to="/project/add"
                          className="nav-link">
                          Projects
                      </NavLink>
                  </li>
                  <li
                      onClick={closeMobileNav}
                      className="nav-item">
                      <NavLink
                          to={`/profile/${currentUser.id}`}
                          className="nav-link">
                          Messages
                      </NavLink>
                  </li>
                  <li
                      onClick={handleLogout}
                      className="nav-item">
                      <Link
                          to="/logout"
                          className="nav-link">
                          Notifications</Link>
                  </li>
                  <li
                      onClick={closeMobileNav}
                      className="nav-item">
                      <NavLink
                          to={`/profile/${currentUser.id}`}
                          className="nav-link">
                          {currentUser.name}
                      </NavLink>
                  </li>
                  <li
                      onClick={handleLogout}
                      className="nav-item">
                      <Link
                          to="/logout"
                          className="nav-link">
                          Logout</Link>
                  </li>
              </ul>
          </div>
      </nav>
  );
}

export default AuthNav;
