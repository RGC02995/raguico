import "./about-me.css";
import img1 from "../../../public/robot.png";

export const AboutMe = () => {
  return (
    <div className="about-me">
      <img className="about-me__img" src={img1} alt="Imagen programador" />
      <p className="about-me__text">
        <span className="about-me__text--black about-me__text--big">#</span> Mi
        nombre es Raúl, soy{" "}
        <span className="about-me__text--black">
          Desarrollador de Software Full Stack{" "}
        </span>
        amante de todas las tecnologías que engloban el desarrollo web, pero en
        particular del maravilloso mundo del Frontend {""}
        <span className="about-me__text--red">❤</span>, donde quiero seguir
        especializándome y poder aportar cada vez más valor donde quiera que
        esté 🚀.
      </p>

      <div className={`about-me__technologies fade-in`}>
        <img
          className="about-me__technologies-img"
          src="../../public/svg/js.svg"
        ></img>
        <img
          className="about-me__technologies-img"
          src="../../public/svg/html.svg"
        ></img>
        <img
          className="about-me__technologies-img"
          src="../../public/svg/css.svg"
        ></img>
        <img
          className="about-me__technologies-img"
          src="../../public/svg/sass-svgrepo-com.svg"
        />
        <img
          className="about-me__technologies-img"
          src="../../public/svg/nodejs.svg"
        />
        <img
          className="about-me__technologies-img"
          src="../../public/svg/react.svg"
        />
      </div>
    </div>
  );
};
