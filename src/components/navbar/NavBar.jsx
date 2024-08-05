import "./NavBar.css";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const menuCheckboxRef = useRef(null);
  const navbarRef = useRef(null);
  const mediaQuery = window.matchMedia("(min-width: 768px)"); // Breakpoint md

  useEffect(() => {
    const menuCheckbox = menuCheckboxRef.current;
    const navbar = navbarRef.current;

    const hideOverFlow = (value) => {
      if (value) {
        window.scrollTo(0, 0);
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }
    };

    const handleAnchorClick = () => {
      if (document.body.style.overflowY === "hidden") {
        hideOverFlow(false);
        if (menuCheckbox) {
          menuCheckbox.checked = false;
        }
      }
    };

    const handleCheckboxChange = (e) => {
      e.target.checked ? hideOverFlow(true) : hideOverFlow(false);
    };

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        hideOverFlow(false);
        if (menuCheckbox) {
          menuCheckbox.checked = false;
        }
      }
    };

    navbar.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    if (menuCheckbox) {
      menuCheckbox.addEventListener("change", handleCheckboxChange);
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Cleanup event listeners on unmount
    return () => {
      navbar.querySelectorAll("a").forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      if (menuCheckbox) {
        menuCheckbox.removeEventListener("change", handleCheckboxChange);
      }
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [mediaQuery]);

  return (
    <header className="header">
      <nav className="navbar" ref={navbarRef}>
        <input
          type="checkbox"
          ref={menuCheckboxRef}
          id="menuCheckbox"
          className="checkbox"
          hidden
        />
        <label htmlFor="menuCheckbox" className="checkbox__label">
          <img
            className="checkbox__label-img--menu"
            src="/svg/menu-white.svg"
            alt="open menu"
          />
          <img
            className="checkbox__label-img--close"
            src="/svg/close-white.svg"
            alt="close menu"
          />
        </label>

        <ul className="navbar__list">
          <li className="navbar__list-item">
            <Link to="/">Sobre mi­</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/experience">Experiencia</Link>
          </li>
          <li className="navbar__list-item">
            <Link to="/proyects">Proyectos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
