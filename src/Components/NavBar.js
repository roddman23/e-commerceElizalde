import React from 'react';
import CartWidget from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import logo from '../assets/logo.png'; // Importa el logo
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css'; // Agrega un archivo CSS para estilos personalizados

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <a className="navbar-brand" href="#">
        <img src={logo} alt="Logo" className="logo-img" />
        Malditos Alamos Crew
      </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Inicio</a>
          </li>
        </ul>
        <CartWidget itemCount={3} />
      </div>
    </nav>
  );
};

export default NavBar;
