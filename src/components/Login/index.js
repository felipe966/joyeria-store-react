import React from 'react'

export default function index() {
  return (
    <>
    <h1 className="display-1 text-center m-4">Inicio de sesión</h1>
      <div className="container">
        <form className="row g-3 needs-validation" novalidate>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Correo electronico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              Ingrese su correo.
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
            Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
            <div id="passHelp" className="form-text">
              Ingrese su contraseña.
            </div>
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" for="exampleCheck1">
              Recordar cuenta
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Iniciar sesión
          </button>
        </form>
      </div>
    </>
  )
}
