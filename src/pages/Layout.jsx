import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <div>
      <header>
        <div className="nav-content">
          <h1>Sua Logo</h1>
          <nav>
            <NavLink className="home-link" to="/">
              Home
            </NavLink>
          </nav>
        </div>
      </header>

      <Outlet />

      <footer>
        <div className="footer-content">
          <p>© Todos os direitos reservados</p>
        </div>
      </footer>
    </div>
  );
}
