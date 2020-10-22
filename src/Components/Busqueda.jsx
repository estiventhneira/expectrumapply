import React from "react";

function Busqueda() {
  return (
    <section className="busqueda">
      <div className="section">
        <div className="row">
          <div className="col s8 offset-s2 input-field input-container">
            <i className="material-icons">search</i>
            <input
              type="search"
              id="search"
              placeholder="Qué quieres buscar?"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Busqueda;
