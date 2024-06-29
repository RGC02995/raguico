import "./pages.css";
import img1 from "../../public/robot.png";

export const AboutMe = () => {
  return (
    <div className="sections-flex">
      <div className="about-flex-wrap">
        <img className="img-style" src={img1} alt="Imagen programador" />
        <p className="description-style">
          <span className="black-colorText big-text">#</span> Mi nombre es Raúl,
          soy{" "}
          <span className="black-colorText">
            Desarrollador de Software Full Stack
          </span>{" "}
          amante de todas las tecnologías que engloban el desarrollo web, pero
          en particular del maravilloso mundo del Frontend{" "}
          <span className="red-colorText">❤</span>, donde quiero seguir
          especializándome y poder aportar cada vez más valor donde quiera que
          esté 🚀.
        </p>
      </div>

      <div className="about-flex-wrap background-technologies">
        <h4>JavaScript</h4>
        <h4>HTML</h4>
        <h4>CSS</h4>
        <h4>Sass</h4>
        <h4>Node.js</h4>
        <h4>React</h4>
        <h4>MongoDB</h4>
        <h4>BootStrap</h4>
      </div>
    </div>
  );
};
