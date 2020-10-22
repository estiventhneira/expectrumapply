import React from "react";

function Header() {
  return (
    <header>
      <nav className="container">
        <a href="index.html" className="brand-logo valign-wrapper">
          <img
            className="responsive-img left z-depth-2"
            src="./assets/img/Logo.jpg"
            alt="Mi Logo"
          />
        </a>
        <ul className="right valign-wrapper">
          <li>
            <a href="/">Sobre Nosotros</a>
          </li>
          <li>
            <a href="/">Contacto</a>
          </li>
          <li>
            <a className="btn" href="registro.html">
              Registro
            </a>
          </li>
        </ul>
      </nav>
      <section className="header-main-pic z-depth-2"></section>
    </header>
  );
}

export default Header;
