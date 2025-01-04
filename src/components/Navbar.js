import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const LordIcon = ({ src, trigger, size }) => {
    return (
      <lord-icon
        src={src}
        trigger={trigger}
        style={{ width: size, height: size }}
      ></lord-icon>
    );
  };

  return (
    <div>
      <nav className={`navbar navbar-expand-lg shadow navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <LordIcon
            src="https://cdn.lordicon.com/tobsqthh.json"
            trigger="hover"
            size="50px"
          />
          <Link className="navbar-brand" to="/">{props.title}</Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">{props.about}</Link>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
                {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  mode: PropTypes.string,
  toggleMode: PropTypes.func,
};
