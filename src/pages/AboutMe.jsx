import "./pages.css";
import img1 from "../../public/robot.png";
import { useRenderComponent } from "../hooks/useRenderComponent";
import { Technologies } from "../components/technologies/Technologies";

export const AboutMe = () => {
  const { isVisible } = useRenderComponent();

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

      {isVisible ? <Technologies /> : null}
    </div>
  );
};
