import "./NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <header>
      <nav className="nav-flex">
        <ul className="ul-flex">
          <li className="li-style">
            <Link to="/aboutme">Sobre mí</Link>
          </li>
          <li className="li-style">
            <Link to="/experience">Experiencia</Link>
          </li>
          <li className="li-style">
            <Link to="/proyects">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
