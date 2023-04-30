import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {
  const state = useSelector((state) => state.handleCart);
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 shadow-lg ">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Joyería-Proyecto2
        </NavLink>
        <div class="collapse navbar-collapse" id="navbarsExample05">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item ">
          <NavLink className="nav-link" aria-current="page" to="/">
              Inicio
            </NavLink>
          </li>
          <li class="nav-item">
          <NavLink className="nav-link" to="/products">
              Joyería
            </NavLink>
          </li>
          <li class="nav-item">
          <NavLink className="nav-link" to="/about">
              Sobre nosotros
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contacto
            </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/login" className="btn btn-light btn-outline-dark">
                <i className="fa fa-sign-in me-1"></i> Iniciar sesión
              </NavLink>
          </li>
          <li class="nav-item">
          <NavLink to="/register" className="btn btn-light btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Registrarse
              </NavLink>
             
          </li>
          <li class="nav-item">
          <NavLink to="/cart" className="btn btn-light btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Carrito (
                {state.length})
              </NavLink>
          </li>
          
        </ul>
      </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <div className="navbar-nav">
            
            
            
            
            <div className="nav-link buttons">
              
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
