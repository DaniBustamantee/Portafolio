import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ tema, toggleTema }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Mi Portafolio</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Sobre mí</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">Proyectos</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link>
            </li>

          </ul>
           <button className="btn btn-outline-light ms-auto" onClick={toggleTema}>
            {tema === 'light' ? '🌙' : '☀️'}
          </button> 
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  tema: PropTypes.string,
  toggleTema: PropTypes.func,
};

export default Navbar;