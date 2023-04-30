import React from "react";

export default function index() {
  return (
    <>
      <h1 className="display-1 text-center m-4">Registro de usuario</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="col-md-4">
            <label for="validationCustom01" className="form-label">
              Nombre:
            </label>
            <input
              type="text"
              className="form-control"
              id="validationCustom01"
              aria-describedby="inputGroupPrepend"
              required
            />
            <div id="nameHelp" className="form-text">
              Ingrese su nombre.
            </div>
            <div className="valid-feedback">Parece estar bien</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustom02" className="form-label">
              Apellidos:
            </label>
            <input type="text" className="form-control" id="validationCustom02" aria-describedby="inputGroupPrepend" required />
            <div id="lastnameHelp" className="form-text">
              Ingrese sus apellidos.
            </div>
            <div className="valid-feedback">Parece estar bien</div>
          </div>
          <div className="col-md-4">
            <label for="validationCustomUsername" className="form-label">
              Email:
            </label>
            <div className="input-group has-validation">
              <input type="email" className="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required />
              
              <div className="invalid-feedback">Por favor ingrese un correo electrónico válido.</div>
              
            </div>
            <div id="emailHelp" className="form-text">
              Ingrese su correo electronico.
              </div>
          </div>
        
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label className="form-check-label" for="invalidCheck">
                Acepto los términos y condiciones
              </label>
              <div className="invalid-feedback">
                Por favor aceptar términos y condiciones
              </div>
            </div>
          </div>
          <div className="col-12">
            <button className="btn btn-primary" type="submit">
              Registrarme
            </button>
          </div>
        </form>{" "}
      </div>
    </>
  );
}
