import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export default function NavBar() {

    return (
        <div className="container mt-5">
        <h1 className="text-center mb-5">Contáctanos</h1>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Mensaje
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-md-6">
            <h2>Información de Contacto</h2>
            <p>123 Calle Principal</p>
            <p>San José, Costa Rica</p>
            <p>+506 1234-5678</p>
            <p>info@joyeriademo.com</p>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.6219971844917!2d-84.08760768465824!3d9.932324676044233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e122d9ad4a33%3A0x4f8654b4da1b7cc4!2sJoyer%C3%ADa%20Demo!5e0!3m2!1sen!2scr!4v1620346661866!5m2!1sen!2scr"
            width="100%"
            height="450"
            loading="lazy"
          ></iframe>s
        </div>
      </div>
    );

}