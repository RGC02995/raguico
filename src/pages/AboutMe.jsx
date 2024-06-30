import "./pages.css";
import img1 from "../../public/robot.png";
import { renderComponent } from "../utils/renderComponent";

export const AboutMe = () => {
  const { isVisible } = renderComponent();

  return (
    <div className="sections-flex">
      <div className="about-flex-wrap">
        <img className="img-style" src={img1} alt="Imagen programador" />
        <p className="description-style">
          <span className="black-colorText big-text">#</span> Mi nombre es Raúl,
          soy{" "}
          <span className="black-colorText">
            Desarrollador de Software Full Stack{" "}
          </span>
          amante de todas las tecnologías que engloban el desarrollo web, pero
          en particular del maravilloso mundo del Frontend {""}
          <span className="red-colorText beat">❤</span>, donde quiero seguir
          especializándome y poder aportar cada vez más valor donde quiera que
          esté 🚀.
        </p>
      </div>

      {isVisible && (
        <div
          className={`about-flex-wrap-technology background-technologies ${
            isVisible && "fadeIn"
          }`}
        >
          <img className="svg-style" src="../../public/svg/js.svg"></img>
          <img className="svg-style" src="../../public/svg/html.svg"></img>
          <img className="svg-style" src="../../public/svg/css.svg"></img>
          <img
            className="svg-style"
            src="../../public/svg/sass-svgrepo-com.svg"
          />
          <img className="svg-style" src="../../public/svg/nodejs.svg" />
          <img className="svg-style" src="../../public/svg/react.svg" />
        </div>
      )}
    </div>
  );
};
