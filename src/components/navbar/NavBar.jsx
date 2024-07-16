import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <ul className="navbar__list">
          <li className="navbar__list-item">
            <Link to="/aboutme">
              Sobre mí
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/experience">
              Experiencia
            </Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/proyects">
              Proyectos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
